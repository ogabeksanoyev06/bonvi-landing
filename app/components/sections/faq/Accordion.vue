<template>
	<div>
		<div v-if="loading" class="flex flex-col gap-4">
			<div v-for="key in 5" :key class="bg-white border-2 border-white rounded-2xl shadow-card cursor-pointer h-[60px] flex items-center justify-between px-4">
				<div class="w-3/4 h-12 rounded-xl skeleton"></div>
				<div class="size-10 rounded-full skeleton"></div>
			</div>
		</div>
		<div class="bg-gray rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] px-6 sm:px-8">
			<div v-if="loading" class="p-6 sm:p-8 text-center">
				<div class="animate-spin h-8 w-8 border-b-2 border-blue mx-auto rounded-full" />
				<p class="text-sm sm:text-base lg:text-xl mt-4">{{ $t('faq_loading') }}</p>
			</div>

			<div v-for="(item, index) in accordionItems" :key="index" class="border-b border-dark/10 last:border-b-0 py-8 cursor-pointer">
				<div class="w-full flex items-center justify-between gap-4 text-left" @click="toggleItem(index)">
					<h3 class="text-md font-adero-trial sm:text-xl lg:text-[28px] font-bold !leading-140">
						{{ item.title }}
					</h3>
					<div
						class="size-10 sm:size-12 lg:size-[54px] bg-white rounded-full flex items-center justify-center transition-transform duration-300 shrink-0"
						:class="{ 'rotate-180': activeIndex === index }"
					>
						<NuxtImg :src="activeIndex === index ? '/images/minus-icon.svg' : '/images/plus-icon.svg'" class="w-6 sm:w-8" alt="Toggle icon" />
					</div>
				</div>
				<transition name="accordion" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
					<div v-show="activeIndex === index">
						<div class="pt-5 sm:pt-7">
							<div class="text-sm sm:text-base lg:text-2xl !leading-140 opacity-90">
								{{ item.content }}
							</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script setup>
const { t } = useI18n()
const loading = ref(false)

const accordionItems = computed(() => [
	{
		title: t('faq_q1'),
		content: t('faq_a1')
	},
	{
		title: t('faq_q2'),
		content: t('faq_a2')
	},
	{
		title: t('faq_q3'),
		content: t('faq_a3')
	},
	{
		title: t('faq_q4'),
		content: t('faq_a4')
	},
	{
		title: t('faq_q5'),
		content: t('faq_a5')
	},
	{
		title: t('faq_q6'),
		content: t('faq_a6')
	}
])

const activeIndex = ref(null)

const toggleItem = (index) => {
	activeIndex.value = activeIndex.value === index ? null : index
}

function enter(el) {
	el.style.height = '0px'
	el.style.opacity = '0'
	void el.offsetHeight
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}

function afterEnter(el) {
	el.style.height = 'auto'
}

function leave(el) {
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
	void el.offsetHeight
	el.style.height = '0px'
	el.style.opacity = '0'
}

function afterLeave(el) {
	el.style.height = '0px'
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
	transition:
		height 0.3s ease,
		opacity 0.3s ease;
	overflow: hidden;
}
</style>
