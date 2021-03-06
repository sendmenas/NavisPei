class Movement {
	constructor() {
		this.package = document.getElementsByClassName("page__package")[0];
		this.rack = document.getElementsByClassName("page__rack")[0];
		this.trackLines = document.getElementsByClassName("page__track-container__line");
		this.lift = document.getElementsByClassName("page__lift")[0];
		this.fork = document.getElementsByClassName("page__lift__fork")[0];
		this.forkliftWheels = document.getElementsByClassName("wheel-rotation");
		this.truckWheels = document.getElementsByClassName("page__truck__wheel");
		this.truck = document.getElementsByClassName("page__truck")[0];
		this.page = document.getElementsByClassName("page")[0];
	}
	
	init() {
		let customer = document.createElement("div");
		customer.className = "page__customer";
		this.page.appendChild(customer);
		setTimeout(() => {
			let contract = document.createElement("div");
			contract.className = "page__contract";
			this.page.appendChild(contract);
			setTimeout(() => {
				customer.classList.add("page__customer--disapear");
				setTimeout(() => {
					this.page.removeChild(customer);
				}, 590);
			}, 1000);
			setTimeout(() => {
				this.page.removeChild(contract);
				this.startConveyor();
			}, 2000);
		}, 1000);


		for (let i = 0; i < this.trackLines.length; i++) {
			this.trackLines[i].setAttribute("style", "left:" + (-20 + i * 20) + "px");
		}
	}

	startConveyor() {
		let packageInitialLeftOffset = 420;
		for (let i = 1; i < 255; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left:" + (packageInitialLeftOffset + i) + "px");
				if (i == 254) {
					this.lowerPackage();
				}
			}, 15*i);
		}		
	}

	lowerPackage() {
		let packageInitialBottomOffset = 846;
		let rackInitialBottomOffset = 845;
		for (let i = 1; i < 375; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left: 674px; bottom:" + (packageInitialBottomOffset - i) + "px");
				this.rack.setAttribute("style", "bottom:" + (rackInitialBottomOffset - i) + "px");
				if (i == 374) {
					this.startForklift();
				}
			}, 5*i);
		}
	}

	startForklift() {
		let forkliftInitialLeftOffset = 275;

		for (let i = 0; i < this.forkliftWheels.length; i++) {
  			this.forkliftWheels[i].classList.add("rotateMachineWheelForward");
		}

		for (let i = 1; i < 191; i++) {
			setTimeout(() => {
				this.lift.setAttribute("style", "left:" + (forkliftInitialLeftOffset + i) + "px");
				if (i == 190) {
					for (let i = 0; i < this.forkliftWheels.length; i++) {
			  			this.forkliftWheels[i].classList.remove("rotateMachineWheelForward");
					}
					this.grabPackage();
				}
			}, 5*i);
		}
	}

	grabPackage() {
		let packageInitialBottomOffset = 472;
		let forkInitialBottomOffset = 0;
		for (let i = 1; i < 21; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left: 674px; bottom:" + (packageInitialBottomOffset + i) + "px");
				this.fork.setAttribute("style", "bottom:" + (forkInitialBottomOffset + i) + "px");
				if (i == 20) {
					this.movePackageToTruck();
				}
			}, 50*i);
		}

	}

	movePackageToTruck() {
		let forkliftLeftOffset = 465;
		let packageleftOffset = 674;
		let packageInitialBottomOffset = 492;
		let forkInitialBottomOffset = 20;
		let rackInitialBottomOffset = 471;

		setTimeout(() => {
			for (let i = 1; i < 375; i++) {
				setTimeout(() => {
					this.rack.setAttribute("style", "bottom:" + (rackInitialBottomOffset + i) + "px");
					if (i == 374) {
						this.rack.removeAttribute("style");
					}
				}, 5*i);
			}			
		}, 2000);

		for (let i = 0; i < this.forkliftWheels.length; i++) {
  			this.forkliftWheels[i].classList.add("rotateMachineWheelForward");
		}

		for (let i = 1; i < 636; i++) {
			setTimeout(() => {
				this.lift.setAttribute("style", "left:" + (forkliftLeftOffset + i) + "px");
				this.package.setAttribute("style", "left:" + (packageleftOffset + i) + "px; bottom: 492px;");
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
		let truckInitialRightOffset = 220;
		let forkliftLeftOffset = 1100;

		this.package.removeAttribute("style");

		for (let i = 0; i < this.truckWheels.length; i++) {
  			this.truckWheels[i].classList.add("rotateMachineWheelForward");
		}

		for (let i = 1; i < 801; i++) {
			setTimeout(() => {
				this.truck.setAttribute("style", "right:" + (truckInitialRightOffset - i) + "px");
			}, 5*i);
		}
		for (let i = 0; i < this.forkliftWheels.length; i++) {
  			this.forkliftWheels[i].classList.add("rotateMachineWheelBackwards");
		}
		for (let j = 1; j < 826; j++) {
			setTimeout(() => {
				this.lift.setAttribute("style", "left:" + (forkliftLeftOffset - j) + "px");
				if (j == 825) {
					for (let i = 0; i < this.forkliftWheels.length; i++) {
			  			this.forkliftWheels[i].classList.remove("rotateMachineWheelBackwards");
					}
					this.returnTruck();
				}
			}, 5*j);
		}
	}

	returnTruck() {
		let truckInitialRightOffset = -579;
		for (let i = 0; i < this.truckWheels.length; i++) {
			this.truckWheels[i].classList.remove("rotateMachineWheelForward");
  			this.truckWheels[i].classList.add("rotateMachineWheelBackwards");
		}
		for (let i = 1; i < 801; i++) {
			setTimeout(() => {
				this.truck.setAttribute("style", "right:" + (truckInitialRightOffset + i) + "px");
				if (i == 800) {
					for (let i = 0; i < this.truckWheels.length; i++) {
			  			this.truckWheels[i].classList.remove("rotateMachineWheelBackwards");
					}					
				this.init();
				}
			}, 5*i);
		}
	}
}