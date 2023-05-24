import './HomePage.css'; // Import the CSS file for styling

enum MenuOption {
  ViewPublicList,
  AddToPublicList,
  ViewPrivateList,
  AddToPrivateList,
}

const HomePage: React.FC = () => {

  	const handleMenuOptionClick = (option: MenuOption) => {
    	console.log('Menu Option:', option);

		switch (option) {
			case MenuOption.ViewPublicList:
				window.location.href = '/public-list';
				break;
			case MenuOption.AddToPublicList:
				window.location.href = '/add-to-public-list';
				break;
			case MenuOption.ViewPrivateList:
				window.location.href = '/private-list';
				break;
			case MenuOption.AddToPrivateList:
				window.location.href = '/add-to-private-list';
				break;
			default:
				break;
		}
	};

  return (
    <div>
        <header className="header"></header>

        <h2>Hello, user</h2>

        <div className="menu">
          <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.ViewPublicList)}>
            View Public List
          </div>
          <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.AddToPublicList)}>
            Add Item to Public List
          </div>
          <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.ViewPrivateList)}>
            View Private List
          </div>
          <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.AddToPrivateList)}>
            Add Item to Private List
          </div>
        </div>

    </div>
  );
};

export default HomePage;
