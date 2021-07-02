import "./index.scss";
export default function Header() {
  return (
    <header className="header">
      <img
        className="avatar"
        alt="Avatar"
        src="https://imgtu.com/i/R6hOPK"
        // src="https://github.com/LeonRen1248/training-app/blob/master/Alan_head_icon_bao.jpg"
        // src="https://inews.gtimg.com/newsapp_match/0/3581582328/0"
      />
      <h2>
        姓名：<span className="name">Leon Ren</span>，年龄：
        <span className="age">23</span>岁
      </h2>
    </header>
  );
}
