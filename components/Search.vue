<template>
    <main class="p-4 rounded-md overflow-hidden">
        <div class="relative">
            <input v-model="search" @input="debouncedSearch" type="search" id="default-search"
                placeholder="Search Articles.." required />
        </div>
        <ul v-if="searchResults.length && !isLoading" class="list-none">
            <li v-for="result in searchResults" :key="result.id" class="">
                <a :href="result.id" class="">
                    <div class="">
                        <h3 class="">{{ result.title }}</h3>
                        <div class="" v-html="result.highlightedContent">
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <div v-else-if="!isLoading && searchInitiated && searchResults.length === 0 && search"
            class="mt-4">
            No results found for "{{ search }}"
        </div>
    </main>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';

interface SearchResult {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    highlightedContent: string;
}

const { locale } = useI18n();

const search = ref<string>('');
const searchResults = ref<SearchResult[]>([]);
const isLoading = ref<boolean>(false);
const searchInitiated = ref<boolean>(false);

const performSearch = async () => {
    const query = search.value.trim();
    if (!query) {
        searchResults.value = [];
        searchInitiated.value = false;
        return;
    }

    isLoading.value = true;
    searchInitiated.value = true;
    try {
        const results = await searchContent(query);
        if (Array.isArray(results.value)) {
            const seenUrls = new Set<string>();
            searchResults.value = results.value.filter((result: SearchResult) => {
                const baseUrl = result.id.split('#')[0];
                const isCorrectLocale = locale.value === 'en'
                    ? !baseUrl.includes('/ko/') && !baseUrl.includes('/zh/')
                    : baseUrl.includes(`/${locale.value}/`);
                const isUnique = !seenUrls.has(baseUrl);
                seenUrls.add(baseUrl);

                return isCorrectLocale && isUnique && (
                    result.title.toLowerCase() === query.toLowerCase() ||
                    result.content.toLowerCase().includes(query.toLowerCase())
                );
            }).map((result: SearchResult) => ({
                id: result.id,
                title: result.title,
                excerpt: result.excerpt,
                content: result.content,
                highlightedContent: highlightMatch(result.excerpt || result.content),
            }));
        } else {
            searchResults.value = [];
        }
    } catch (error) {
        console.error('Error performing search:', error);
        searchResults.value = [];
    } finally {
        isLoading.value = false;
    }
};

const debouncedSearch = useDebounceFn(performSearch, 300);

const highlightMatch = (content: string | undefined): string => {
    if (!content) return '';
    const searchTerm = search.value.trim();
    if (!searchTerm) return content;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const matchIndex = content.search(regex);
    if (matchIndex === -1) return content;

    const contextLength = 50;
    const start = Math.max(0, matchIndex - contextLength);
    const end = Math.min(content.length, matchIndex + contextLength);
    let snippet = content.substring(start, end);

    if (start > 0) {
        snippet = '...' + snippet;
    }
    if (end < content.length) {
        snippet = snippet + '...';
    }

    snippet = snippet.replace(regex, '<mark>$1</mark>');

    return snippet;
};

watch([search, () => locale.value], () => {
    debouncedSearch();
});
</script>

<style scoped>
mark {
    background-color: yellow;
}
</style>