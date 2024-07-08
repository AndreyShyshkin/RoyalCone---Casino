import { pad } from './padding'

export const WIDTH = 800
export const HEIGHT = 800
export const ballRadius = 7
export const obstacleRadius = 4

export const gravity = pad(0.6)
export const horizontalFriction = 0.4
export const verticalFriction = 0.8

export const sinkWidth = 36
export const NUM_SINKS = 17

function resizeCanvas() {
	const canvasElement = document.getElementById('plinko')
	if (canvasElement) {
		const scale = Math.min(window.innerWidth / WIDTH, 1) + 0.1
		canvasElement.style.transform = `scale(${scale})`
		canvasElement.style.transformOrigin = 'center center'
	}
}

// Вызываем функцию при загрузке и изменении размера окна
window.addEventListener('load', resizeCanvas)
window.addEventListener('resize', resizeCanvas)
