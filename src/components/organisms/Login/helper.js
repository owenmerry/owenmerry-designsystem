/**
 * inits google sign in button
 * @param {string} clientID
 * @param {ref} buttonRef
 * @param {function} successCallback
 * @param {function} errorCallback
 * @param {function} errorInitCallback
 */
export const initGoogleSignIn = (clientID, buttonRef, successCallback, errorCallback, errorInitCallback) => {
  // get google auth
  var auth2 = gapi.auth2.getAuthInstance();

  // google api settings
  auth2 = gapi.auth2.init({
    client_id: clientID,
    cookiepolicy: 'single_host_origin',
    // scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
  }).then(function(data) {
    data.attachClickHandler(buttonRef, {},
      function(googleUser) {
        // run call back
        successCallback(googleUser);
      }, function(error) {
        // error callback
        errorCallback(error);
      });
  }, function(err) {
    // error on google init
    errorInitCallback(err);
  });
};

/**
 * inits google one tap feature
 * @param {string} clientID
 * @param {function} successCallback
 */
export const initGoogleSignInOneTap = (clientID, successCallback) => {
  // one tap init
  google.accounts.id.initialize({
    client_id: clientID,
    callback: successCallback,
    cancel_on_tap_outside: false,
  });

  // google api settings
  google.accounts.id.prompt((notification) => {
    if (notification.isDisplayMoment()) {
      // if one tap shown
    }
    if (notification.isNotDisplayed() ||
        notification.isSkippedMoment()
    ) {
      // if one tap not shown
    }
    if (notification.isNotDisplayed()) {
      // one tap not shown
    }

    if (notification.isSkippedMoment()) {
    // one tap closed
    }
  });
};
