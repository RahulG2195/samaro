'use client';
import { Button, Nav, NavItem } from "reactstrap";
// import Logo from "../../../../../public/assets/images/logo/logo_alt.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navigation = [

  {
    title: "Dashboard",
    href: "/admin",
    icon: "bi bi-speedometer2",
  },
  {
    type: "accordion",
    title: "Home Page",
    items: [
      { title: "Hero banner", href: "/admin/home/banner" },
      { title: "Spc Lvt section", href: "/admin/home/spcLvt" },
      { title: "Design Range", href: "/admin/action/three" },
      { title: "Benifits", href: "/admin/home/benifits" },
      { title: "Floor Explorer", href: "/admin/action/three" },
      { title: "Spaces", href: "/admin/action/three" },
    ],
    icon: "bi bi-speedometer2",

  },
 
  {
    type: "accordion", title: "Product", items: [
      { title: "Hero Banner", href: "/admin/product/banner" },
      { title: "Add Product", href: "/admin/product" },
      // { title: "Delete Product", href: "/admin/product/delete" },
    ],
      icon: "bi bi-speedometer2",

  },
  {
    type: "accordion",
    title: "Contact us",
    items: [
      { title: "Hero banner", href: "/admin/contactUs/banner" },
      // { title: "Spc Lvt section", href: "/admin/home/spcLvt" },
      // { title: "Design Range", href: "/admin/action/three" },
      // { title: "Benifits", href: "/admin/action/three" },
      // { title: "Floor Explorer", href: "/admin/action/three" },
      // { title: "Spaces", href: "/admin/action/three" },
    ],
    icon: "bi bi-speedometer2",

  },

  {
    title: "Basic Information",
    href: "/admin/basicInfo",
    icon: "bi bi-bell",
  },
  {
    title: "Alert",
    href: "/ui/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },

  {
    title: "Buttons",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  // other navigation items...
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between">
        <img src="/assets/images/logo/logo_alt.png" alt="" className="w-25" />
        <div className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={showMobilemenu}
          ></Button>
        </div>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => {
            if (navi.type === "accordion") {
              return (
                <div className="accordion accordion-flush " id={`accordionFlushExample${index}`} key={index}>
                  <div className="accordion-item  ">
                    <div
                      className="accordion-button collapsed p-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index}`}
                    >
                      <i className={navi.icon}></i>
                      <span className="ms-3 d-inline-block">{navi.title}</span>

                    </div>
                    <ul
                      id={`flush-collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${index}`}
                      data-bs-parent={`#accordionFlushExample${index}`}
                    >
                      {navi.items.map((item, subIndex) => (
                        <li className="nav-item" key={subIndex}>
                          <Link href={item.href} className="nav-link">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
            return (
              <NavItem key={index} className="sidenav-bg">
                <Link href={navi.href} className={
                  location === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }>
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            );
          })}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
