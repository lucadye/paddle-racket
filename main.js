function Vector2(x, y) {
	return {
		x,
		y,
	}
}

const input = {
	newKeyEvent(key, type, func) {
		switch (type) {
			case "up":
				document.addEventListener("keyup", (e) => {
					if (e.code === key) {
						func(e);
					}
				});
				break;
			default:
				document.addEventListener("keydown", (e) => {
					if (e.code === key) {
						func(e);
					}
				});
		}
	}
};