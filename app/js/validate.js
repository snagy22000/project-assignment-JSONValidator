export default function () {

  'use strict';

  const ValidateJSON = ValidateJSON || {

    init: function () {
      this.cacheDOM();
      this.addEvent(this.bodyElement, 'click', this.validateJSON.bind(this));
      //       this.addEvent(this.bodyElement, 'click', this.styleDOM.bind(this));
    },
    addEvent: function (target, eventType, eventHandler) {
      if (target) {
        target.addEventListener(eventType, eventHandler);
      }
    },
    cacheDOM: function () {
      this.bodyElement = document.querySelector('body');
      this.textInput = document.querySelector('.inputfield');
    },
    styleDOM: function (params) {
      let input = document.querySelector('.result__list--output');
      if (params !== true) {
        input.textContent = "JSON is invalid!";
        input.classList.add("invalid");
      } else {
        input.textContent = "JSON is valid!";
        input.classList.add("valid");
      }
    },
    validateJSON: function (e) {
      let result;
      let json = this.textInput.value;

      json = json.replace(/\s/g, "");
      let jsonPattern = /^{("([^"])*":(?:(?:true|false)|\d+|"([^"])*")(?:,"([^"])*":(?:(?:true|false)|\d+|"([^"])*"))*)?}$/g;

      if (e.target.classList.value === 'validate') {
        var foundPattern = jsonPattern.exec(json);
        if (foundPattern !== null) {
          result = true;
        } else {
          result = false;
        }
              this.styleDOM(result);

      }
    }
  };

  ValidateJSON.init();

}
