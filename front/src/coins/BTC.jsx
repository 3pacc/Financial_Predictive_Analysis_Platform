import React, { useEffect, useRef } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

function CryptoCharts() {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      interval: '1m',
      width: 425,
      isTransparent: false,
      height: 450,
      symbol: 'BINANCE:BTCUSDT',
      showIntervalTabs: true,
      displayMode: 'single',
      locale: 'en',
      colorTheme: 'dark',
    });

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.removeChild(script);
    };
  }, []);

    return (
      <div>
        <h2>Bitcoin Chart</h2>
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          width="100%"
          height="400"
          locale="en"
          dateRange="12M"
          colorTheme="dark"
        />

        <div className="tradingview-widget-container">
          <div ref={containerRef} className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default CryptoCharts;