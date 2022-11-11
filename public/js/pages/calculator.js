import helpers from "../helpers.js";

const calc = (cake, coin, usdInput = 0) => {
  return `
  <div class="bg-transparent"></div>
  <section>
    <div class="roi-calculator">
      <div class="head">
        <h2 class="fs-md">ROI Calculator</h2>
        <div id="exit-calc">
          <svg
            viewBox="0 0 24 24"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-8a800401-0 wNVai"
          >
            <path
              fill="currentColor"
              d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="main">
        <div class="staked">
          <h5>CAKE STAKED</h5>
          <div class="field">
            <div class="input">
              <div class="usd">
                <input type="number" id="usd-input" placeholder="0.00" value=${
                  usdInput === 0 ? "0.00" : usdInput
                } style="outline: 0"/>
                <p>USD</p>
              </div>
              <div class="cake">
                <p>${Math.round((usdInput * 100) / cake.usd) / 100} CAKE</p>
              </div>
            </div>
            <div class="btn-swap">
              <svg
                viewBox="0 0 24 25"
                color="textSubtle"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-4ba21b47-0 ebMyYP"
              >
                <path
                  d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="buttons">
            <div class="btn-100">$100</div>
            <div class="btn-1000">$1000</div>
            <div class="btn-mine">MY BALANCE</div>
          </div>
        </div>
        <div class="staked-for">
          <h5>STAKED FOR</h5>
          <div class="time-line">
            <div class="slider"></div>
            <div class="buttons">
              <div class="btn-1d">1D</div>
              <div class="btn-7d">7D</div>
              <div class="btn-30d">30D</div>
              <div class="btn-1y">1Y</div>
              <div class="btn-5y">5Y</div>
            </div>
          </div>
        </div>
        <div class="compounding">
          <h5>COMPOUNDING EVERY</h5>
          <div class="checkbox">
            <input type="checkbox" name="compounding" id="compounding" />
            <div class="time-line">
              <div class="slider"></div>
              <div class="buttons">
                <div class="btn-1d">D</div>
                <div class="btn-7d">7D</div>
                <div class="btn-14d">14D</div>
                <div class="btn-30d">30D</div>
              </div>
            </div>
          </div>
        </div>
        <button class="enter"></button>
        <div class="rates">
          <h5>ROI AT CURRENT RATES</h5>
          <h4>$${Math.round(usdInput * coin.apr) / 100}</h4>
          <p>~ ${Math.round(usdInput * coin.apr * coin.usd) / 100} MGP (${
    coin.apr
  }%)</p>
        </div>
      </div>
      <div class="details">Details</div>
    </div>
  </section>
  
  `;
};

export default { calc };
