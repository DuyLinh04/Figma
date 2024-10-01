import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Cửa hàng</a></li>
            <li><a href="#">Hướng dẫn</a></li>
            <li><a href="#">Tin tức & Sự kiện</a></li>
            <li><a href="#">Giới thiệu</a></li>
          </ul>
          <a href="#" className="btn-buy">Mua gói học</a>
        </nav>
      </header>
      <main className="main-content">
        <div className="content">
          <h1>Beta English World 1</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
