import LocalStorageManager from '../helpers/LocalStorageManager';
import './HomePage.css'; // Import the CSS file for styling

enum MenuOption {
  ViewPublicList,
  AddToPublicList,
  ViewPrivateList,
  AddToPrivateList,
  ViewProfile,
  AddToPendingList
}

const HomePage: React.FC = () => {

    const userRole = LocalStorageManager.getRole() || '';

    if (userRole === '') {
      window.location.href = '/login';
    }

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
      case MenuOption.AddToPendingList:
        window.location.href = '/pending-list';
        break;
      case MenuOption.ViewProfile:
        window.location.href = '/profile';
        break;
			default:
				break;
		}
	};

  return (
    <div>
        <header onClick={() => {window.location.href = "/"}} className="header">
            <button
              className="logout-button"
              onClick={() => {
                LocalStorageManager.performLogoutCleaning();
                window.location.href = "/login";
            }}>
              Logout
            </button>
        </header>

        <h2>Hello, user</h2>

        <div className="menu">
          <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.ViewPublicList)}>
            View Public List
          </div>
          {
            userRole === 'ROLE_ADMIN' &&
            <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.AddToPublicList)}>
              Add Item to Public List
            </div>
          }
          {
            userRole === 'ROLE_ADMIN' &&
            <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.AddToPendingList)}>
              Approve locations
            </div>
          }
          {
            userRole === 'ROLE_REGULAR' &&
            <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.ViewPrivateList)}>
              View Private List
            </div>
          }
          {
            userRole === 'ROLE_REGULAR' &&
            <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.AddToPrivateList)}>
              Add Item to Private List
            </div>
          }
          {/* {
            userRole === 'ROLE_REGULAR' &&
            <div className="menu-option" onClick={() => handleMenuOptionClick(MenuOption.ViewProfile)}>
              View Profile
            </div>
          } */}
        </div>

    </div>
  );
};

export default HomePage;
