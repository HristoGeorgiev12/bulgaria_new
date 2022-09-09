
			const menu_object = [
				{
					name : 'Забележителности',
					href : 'index.html',
					child: [
						{
							name : 'Североизточна България',
							href : 'index.html',
						},
						{
							name : 'Северозападна България',
							href : 'index.html',
						},
						{
							name : 'Югоизточна България',
							href : 'index.html',
						},
						{
							name : 'Югозападна България',
							href : 'index.html',
						},
						{
							name : 'Централна България',
							href : 'index.html',
						}
					]
				},
				{
					name : 'Култура',
					href : 'index.html',
					child: [
						{
							name : 'Ястия',
							href : 'index.html',
						},
						{
							name : 'Думи',
							href : 'index.html',
						},
						{
							name : 'Традиции',
							href : 'index.html',
						}
					]
				},
				{
					name : 'Събития',
					href : 'index.html',
					child: [
						{
							name : 'Фолклор',
							href : 'index.html',
						},
						{
							name : 'Фестивали',
							href : 'index.html',
						},
						{
							name : 'Други',
							href : 'index.html',
						}
					]
				},
				{
					name : 'Обекти',
					href : 'index.html',
					child: [
						{
							name : 'Пътуване',
							href : 'index.html',
						},
						{
							name : 'Заведения',
							href : 'index.html',
						},
						{
							name : 'Хотели',
							href : 'index.html',
						}
					]
				},
				{
					name : 'Галерия',
					href : 'index.html'
				},
				{ 							
					name : 'Контакти',
					href : 'index.html'
				},


			];


			function menuChild(element) {
				let childs='';
				// for(el in element) {
				// 	childs+= `<li><a href="${el.href}">${el.name}</a></li>`;
				// }	

				console.log(element);

				element.forEach(el => {
					childs+= `<li><a href="${el.href}">${el.name}</a></li>`;
				})

				return ` <!-- drop of the page -->
							<div class="drop">
								<ul>
									${childs}
								</ul>
							</div>
				<!-- drop of the page end -->`;
			};

			function menuParent(element) {
				let menu='';

				element.forEach( el => {
					let child = '';
					if(el.child) {
						child = menuChild(el.child);
					}

					menu+= `<li class="active" data-drop="drop-right">
								<a href="${el.href}">${el.name}</a>
								${child}
							</li>
							`;
				})


				return menu;
			};


			
			html_menu = menuParent(menu_object);

			console.log(html_menu);




			let menu = `
	<!-- Nav of the page -->
	<nav id="nav" class="navbar navbar-default">
		<!-- Navbar header of the page -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>
		<!-- Navbar header of the page end -->
		<!-- Collapse navbar collapse of the page -->
		
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">
				${html_menu}
			</ul>
		</div>
		<!-- Collapse navbar collapse of the page end -->
	</nav>
	<!-- Nav of the page end -->
`;
