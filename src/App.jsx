import "./App.css";

function App() {

  const elementAnnually = () => {
    console.log('clicked');    
  }

  const elementMonthly = () => {
    console.log('clicked');    
  }

  return (
    <div class="container">
      <h1 class="title-pricing">Star Scalling Your Bussines Now</h1>
      <p class="text-below">Select from best plan,ensuring a perfect match</p>
      <div class="navigation">
        <span class="button-navigation" ></span>
        <span class="text-navigation monthly" onClick={elementMonthly}>monthly</span>
        <span class="text-navigation annually" onClick={elementAnnually}>Annually</span>
      </div>
      <div class="cards-plan">
        <div class="card-basic">
          <h3 class="title-card">Basic</h3>
          <div class="price-table">
            <span class="price">$120</span>
            <sub class="date">/Month</sub>
          </div>
          <hr />
          <ul class="card-optionitem">
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>elit. Unde, quae</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2400/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>elit. Asperiores, laborum</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Perspiciatis, deleniti</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>adipisicing elit. Eius, tempora</span>
            </li>
          </ul>
          <button class="button-pricing">Get Started</button>
        </div>
        <div class="card-proffesional">
          <h3 class="title-card">proffesional</h3>
          <div class="price-table">
            <span class="price">$220</span>
            <sub class="date">/Month</sub>
          </div>
          <hr />
          <ul class="card-optionitem">
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Unde, quae</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Asperiores, laborum</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Perspiciatis, deleniti</span>
            </li>
          </ul>
          <button class="button-pricing">Get Started</button>
        </div>
        <div class="card-custom">
          <h3 class="title-card">Custom</h3>
          <div class="price-table">
            <span class="price">$350</span>
            <sub class="date">/Month</sub>
          </div>
          <hr />
          <ul class="card-optionitem">
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Lorem ipsum</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Lorem ipsum dolor</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Perspiciatis, deleniti</span>
            </li>
            <li class="option-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>Eius, tempora</span>
            </li>
          </ul>
          <button class="button-pricing button-custom">Get Started</button>
        </div>
      </div>
      <div class="bg-gradient">
        <div class="bg-left"></div>
        <div class="bg-center"></div>
        <div class="bg-right"></div>
      </div>
    </div>
  );
}

export default App;
