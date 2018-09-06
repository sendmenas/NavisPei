class Movement {
	constructor() {
		this.package = document.getElementsByClassName("page__package")[0];
		this.forklift = document.getElementsByClassName("page__forklift")[0];
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
		let packageInitialBottomOffset = 657;
		for (let i = 1; i < 366; i++) {
			setTimeout(() => {
				this.package.setAttribute("style", "left: 665px; bottom:" + (packageInitialBottomOffset - i) + "px");
				if (i == 365) {
					this.startForklift();
				}
			}, 5*i);
		}
	}

	startForklift() {
		let forkliftInitialLeftOffset = 318;
		for (let i = 1; i < 153; i++) {
			setTimeout(() => {
				this.forklift.setAttribute("style", "left:" + (forkliftInitialLeftOffset + i) + "px");
				if (i == 152) {
					this.grabPackage();
				}
			}, 5*i);
		}
	}

	grabPackage() {
		this.package.setAttribute("style", "left: 665px; bottom: 307px;");
		setTimeout(() => {
			this.movePackageToTruck();			
		}, 500);
	}

	movePackageToTruck() {
		let forkliftLeftOffset = 470;
		let packageleftOffset = 665;
		for (let i = 1; i < 636; i++) {
			setTimeout(() => {
				this.forklift.setAttribute("style", "left:" + (forkliftLeftOffset + i) + "px");
				this.package.setAttribute("style", "left:" + (packageleftOffset + i) + "px; bottom: 307px;");
				if (i == 635) {
					setTimeout(() => {
						this.sendTruck();
					}, 500);
				}
			}, 5*i);
		}
	}

	sendTruck() {
		let truckInitialRightOffset = 315;
		let forkliftLeftOffset = 1105;
		let packageleftOffset = 1300;
		for (let i = 1; i < 800; i++) {
			setTimeout(() => {
				this.truck.setAttribute("style", "right:" + (truckInitialRightOffset - i) + "px");
				this.package.setAttribute("style", "left:" + (packageleftOffset + i) + "px; bottom: 307px;");
			}, 5*i);
		}
		for (let j = 1; j < 788; j++) {
			setTimeout(() => {
				this.forklift.setAttribute("style", "left:" + (forkliftLeftOffset - j) + "px");
			}, 5*j);
		}
	}
}