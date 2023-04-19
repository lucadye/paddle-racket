function Vector2(x, y) {
	return {
		x,
		y,
	}
}

function render(objs) {
	let sprites = [];
	objs.forEach(i => {
		sprites.push(sprite(i.imgPath, i.pos, i.size));
	});

	function newCanvas(width=800, height=NaN) {
		let canvas = document.createElement('canvas');
		canvas.class = 'letter';
		if (typeof width !== "number") {
			if (height !== "number") {
				width = 800;
				height = width;
			} else {
				width = height;
			}
		}
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);
		return canvas;
	}

	function sprite(url, pos, size) {
		return {
			url,
			pos,
			x: pos.x,
			y: pos.y,
			size,
			width: size.x,
			height: size.y,
		};
	}

	function draw(sprite) {
		let container = document.querySelector('#canvas-container');
		container.innerHTML = "";
		let canvas = newCanvas(width=500, height=500);
		let ctx = canvas.getContext("2d");
		let img = new Image(sprite.width, sprite.height);
		img.src = sprite.url;
		img.onload = () => {
			ctx.drawImage(img, sprite.x, sprite.y);
		}
		container.appendChild(canvas);
	}

	sprites.forEach(i => {
		draw(i);
	});
}
