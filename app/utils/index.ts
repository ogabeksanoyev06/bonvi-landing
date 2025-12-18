export function formatMoneyDecimal(number: any, fix = 0) {
	const option = {
		maximumFractionDigits: fix,
		minimumFractionDigits: fix
	}

	const formatted = number ? new Intl.NumberFormat('ru-RU', option).format(number) : '0'

	return `${formatted} UZS`
}
