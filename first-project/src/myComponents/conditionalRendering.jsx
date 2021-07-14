import React from 'react';

export default function conditionalRendering() {
    function LoginButton(props) {
        return (
          <button onClick={props.onClick}>
            Login
          </button>
        );
      }
      
      function LogoutButton(props) {
        return (
          <button onClick={props.onClick}>
            Logout
          </button>
        );
      }
}

