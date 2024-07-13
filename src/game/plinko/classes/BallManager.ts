import {
	HEIGHT,
	WIDTH,
	ballRadius,
	obstacleRadius,
	sinkWidth,
} from '../constants'
import { Obstacle, Sink, createObstacles, createSinks } from '../objects'
import { pad, unpad } from '../padding'
import { Ball } from './Ball'

export class BallManager {
	private balls: Ball[]
	private canvasRef: HTMLCanvasElement
	private readonly ctx: CanvasRenderingContext2D
	private readonly obstacles: Obstacle[]
	private readonly sinks: Sink[]
	private requestId?: number
	private readonly onFinish?: (index: number, startX?: number) => void

	constructor(
		canvasRef: HTMLCanvasElement,
		onFinish?: (index: number, startX?: number) => void
	) {
		this.balls = []
		this.canvasRef = canvasRef
		this.ctx = this.canvasRef.getContext('2d')!
		this.obstacles = createObstacles()
		this.sinks = createSinks()
		this.update()
		this.onFinish = onFinish
	}

	addBall(startX?: number) {
		const newBall = new Ball(
			startX || pad(WIDTH / 2 + 13),
			pad(50),
			ballRadius,
			'red',
			this.ctx,
			this.obstacles,
			this.sinks,
			index => {
				this.balls = this.balls.filter(ball => ball !== newBall)
				this.onFinish?.(index, startX)
			}
		)
		this.balls.push(newBall)
	}

	drawObstacles() {
		this.ctx.fillStyle = 'white'
		this.obstacles.forEach(obstacle => {
			this.ctx.beginPath()
			this.ctx.arc(
				unpad(obstacle.x),
				unpad(obstacle.y),
				obstacle.radius,
				0,
				Math.PI * 2
			)
			this.ctx.fill()
			this.ctx.closePath()
		})
	}

	getColor(index: number) {
		const sinksLength = this.sinks.length
		const sinksPerColor = sinksLength / 5
		const colorIndex = Math.floor(index / sinksPerColor)

		const colors = [
			{ background: '#ff003f', color: 'white' },
			{ background: '#ff7f00', color: 'white' },
			{ background: '#ffbf00', color: 'black' },
			{ background: '#ffff00', color: 'black' },
			{ background: '#bfff00', color: 'black' },
			{ background: '#7fff00', color: 'black' },
		]

		return colors[colorIndex % colors.length]
	}
	drawSinks() {
		this.ctx.fillStyle = 'green'
		const SPACING = obstacleRadius * 2
		for (let i = 0; i < this.sinks.length; i++) {
			this.ctx.fillStyle = this.getColor(i).background
			const sink = this.sinks[i]
			this.ctx.font = 'normal 13px Arial'
			this.ctx.fillRect(
				sink.x,
				sink.y - sink.height / 2,
				sink.width - SPACING,
				sink.height
			)
			this.ctx.fillStyle = this.getColor(i).color
			this.ctx.fillText(
				sink?.multiplier?.toString() + 'x',
				sink.x - 15 + sinkWidth / 2,
				sink.y
			)
		}
	}

	draw() {
		this.ctx.clearRect(0, 0, WIDTH, HEIGHT)
		this.drawObstacles()
		this.drawSinks()
		this.balls.forEach(ball => {
			ball.draw()
			ball.update()
		})
	}

	update() {
		this.draw()
		this.requestId = requestAnimationFrame(this.update.bind(this))
	}

	stop() {
		if (this.requestId) {
			cancelAnimationFrame(this.requestId)
		}
	}
}
