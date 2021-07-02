import "./index.scss";
export default function Header() {
  return (
    <header className="header">
      <img
        className="avatar"
        alt="Avatar"
        src="https://z3.ax1x.com/2021/07/02/R6hOPK.jpg"
        // src="https://github.com/LeonRen1248/training-app/blob/master/Alan_head_icon_bao.jpg"
        // src="https://inews.gtimg.com/newsapp_match/0/3581582328/0"
        // <a href="https://imgtu.com/i/R6hOPK"><img src="https://z3.ax1x.com/2021/07/02/R6hOPK.jpg" alt="R6hOPK.jpg" border="0" /></a>
      />
      <h2>
        姓名：<span className="name">Leon Ren</span>，年龄：
        <span className="age">23</span>岁
      </h2>
    </header>
  );
}
