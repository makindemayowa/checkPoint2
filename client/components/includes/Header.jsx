import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchDocuments from '../../components/documents/SearchDocuments.jsx';
import CreateDocument from '../../components/documents/CreateDocument.jsx';
import { logout } from '../../actions/authActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    $('.dropdown-button').dropdown();
  }
  logout() {
    localStorage.removeItem('token');
    this.setState({ logged: false });
  }

  render() {
    return (
      <nav>
        <div className="col s12 nav-wrapper indigo">
          <SearchDocuments />
          <ul id="nav-mobile" className="right ">
            <li>
              <Link
                className="dropdown-button"
                to="/document"
                data-beloworigin="true"
                data-activates="dropdown1"
              >
                  Documents
                  <i className="material-icons right">
                    arrow_drop_down
                  </i>
              </Link>
            </li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/user">Users</Link></li>
            <li><Link to="" onClick={this.logout}>Logout</Link></li>
          </ul>

          <div>
            <ul id="dropdown1" className="dropdown-content">
              <li><Link to="/docs">Owned by Me</Link></li>
              <li><Link to="/document">Owned by Anyone</Link></li>
              <li>
                <Link to="/create">Create Document</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    currentUser: state.auth.user
  };
}

export default connect(mapStateToProps, {
  logout
})(Header);
