class Movement {
	constructor() {
		this.package = document.getElementsByClassName("page__package")[0];
		this.rack = document.getElementsByClassName("page__rack")[0];
		this.trackLines = document.getElementsByClassName("page__track__container__line");
		this.lift = document.getElementsByClassName("page__lift")[0];
		this.fork = document.getElementsByClassName("page__lift__fork")[0];
		this.forkliftWheels = document.getElementsByClassName("page__lift__wheel");
		this.truckWheels = document.getElementsByClassName("page__truck__wheel");
		this.truck = document.getElementsByClassName("page__truck")[0];
		this.page = document.getElementsByClassName("page")[0];
	}
	
	init() {
		let contract = document.createElement("div");
		contract.className = "page__contract";
		this.page.appendChild(contract);
		setTimeout(() => {
			this.page.removeChild(contract);
			this.startConveyor();
		}, 2000);


		for (let i = 0; i < this.trackLines.length; i++) {
			this.trackLines[i].setAttribute("style", "left:" + (-20 + i * 20) + "px");
		}
	}

	startConveyor() {
		let packageInitialLeftOffset = 318;
		for (let i = 1; i < 348; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left:" + (packageInitialLeftOffset + i) + "px");
				if (i == 347) {
					this.lowerPackage();
				}
			}, 5*i);
		}		
	}

	lowerPackage() {
		let packageInitialBottomOffset = 666;
		let rackInitialBottomOffset = 672;
		for (let i = 1; i < 375; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left: 665px; bottom:" + (packageInitialBottomOffset - i) + "px");
				this.rack.setAttribute("style", "left: 671px; bottom:" + (rackInitialBottomOffset - i) + "px");
				if (i == 374) {
					this.startForklift();
				}
			}, 5*i);
		}
	}

	startForklift() {
		let forkliftInitialLeftOffset = 318;

		for (let i = 0; i < this.forkliftWheels.length; i++) {
  			this.forkliftWheels[i].classList.add("rotateMachineWheelForward");
		}

		for (let i = 1; i < 153; i++) {
			setTimeout(() => {
				this.lift.setAttribute("style", "left:" + (forkliftInitialLeftOffset + i) + "px");
				if (i == 152) {
					for (let i = 0; i < this.forkliftWheels.length; i++) {
			  			this.forkliftWheels[i].classList.remove("rotateMachineWheelForward");
					}
					this.grabPackage();
				}
			}, 5*i);
		}
	}

	grabPackage() {
		let packageInitialBottomOffset = 292;
		let forkInitialBottomOffset = 0;
		for (let i = 1; i < 21; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left: 665px; bottom:" + (packageInitialBottomOffset + i) + "px");
				this.fork.setAttribute("style", "bottom:" + (forkInitialBottomOffset + i) + "px");
				if (i == 20) {
					this.movePackageToTruck();
				}
			}, 50*i);
		}

	}

	movePackageToTruck() {
		let forkliftLeftOffset = 470;
		let packageleftOffset = 665;
		let packageInitialBottomOffset = 312;
		let forkInitialBottomOffset = 20;
		let rackInitialBottomOffset = 298;

		setTimeout(() => {
			for (let i = 1; i < 375; i++) {
				setTimeout(() => {
					this.rack.setAttribute("style", "left: 671px; bottom:" + (rackInitialBottomOffset + i) + "px");
					if (i == 374) {
						this.rack.removeAttribute("style");
					}
				}, 5*i);
			}			
		}, 300);

		for (let i = 0; i < this.forkliftWheels.length; i++) {
  			this.forkliftWheels[i].classList.add("rotateMachineWheelForward");
		}

		for (let i = 1; i < 636; i++) {
			setTimeout(() => {
				this.lift.setAttribute("style", "left:" + (forkliftLeftOffset + i) + "px");
				this.package.setAttribute("style", "left:" + (packageleftOffset + i) + "px; bottom: 312px;");
				if (i == 635) {
					for (let i = 0; i < this.forkliftWheels.length; i++) {
			  			this.forkliftWheels[i].classList.remove("rotateMachineWheelForward");
					}
					for (let i = 1; i < 21; i++) {
						setTimeout(() => {
							this.fork.setAttribute("style", "bottom:" + (forkInitialBottomOffset - i) + "px");
							if (i == 20) {
								this.sendTruck();
							}
						}, 50*i);
					};
				}
			}, 5*i);
		}
	}

	sendTruck() {
		let truckInitialRightOffset = 315;
		let forkliftLeftOffset = 1105;
		// let packageleftOffset = 1300;

		this.package.removeAttribute("style");

		for (let i = 0; i < this.truckWheels.length; i++) {
  			this.truckWheels[i].classList.add("rotateMachineWheelForward");
		}

		for (let i = 1; i < 800; i++) {
			setTimeout(() => {
				this.truck.setAttribute("style", "right:" + (truckInitialRightOffset - i) + "px");
			}, 5*i);
		}
		for (let i = 0; i < this.forkliftWheels.length; i++) {
  			this.forkliftWheels[i].classList.add("rotateMachineWheelBackwards");
		}
		for (let j = 1; j < 788; j++) {
			setTimeout(() => {
				this.lift.setAttribute("style", "left:" + (forkliftLeftOffset - j) + "px");
				if (j == 787) {
					for (let i = 0; i < this.forkliftWheels.length; i++) {
			  			this.forkliftWheels[i].classList.remove("rotateMachineWheelBackwards");
					}
				}
			}, 5*j);
		}
	}
}