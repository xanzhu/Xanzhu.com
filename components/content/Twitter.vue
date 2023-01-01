<template>
    <div class="grid place-items-center">
        <div class="border-outline dark:bg-dark-800 bg-light-100 px-4 pb-1">
            <!-- Section One: Title -->
            <div class="flex flex-col">
                <div class="flex space-x-2 items-center">
                    <NuxtImg src="/images/mountain_3.jpeg" class="h-[48px] w-[48px] rounded-full" />
                    <div class="flex flex-col -space-y-1">
                        <div class="inline-flex items-center space-x-1">
                            <span class="font-semibold">Xanzhu Technologies</span>
                            <svg viewBox="0 0 24 24" aria-label="Verified account" role="img" class="h-4 w-4"
                                fill="currentColor" data-testid="icon-verified">
                                <g>
                                    <path
                                        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div class="flex space-x-2">
                            <span class="text-gray-500 dark:text-gray-400">@Xanzhu</span>
                            <span class="font-semibold text-blue-600">Follow</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Section Two: Content  -->
            <div>
                <span>Hello world this is text I think lol</span>
            </div>
            <!-- Section Three: Image -->
            <NuxtImg src="/images/mountain_4.jpeg" class="rounded-md h-[280px] w-[520px]" />
            <!-- Section Four: Date -->
            <Time class="text-gray-500 text-sm">
                2023-01-01
            </Time>
        </div>
    </div>
</template>