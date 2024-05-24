import React, { useState, useContext } from "react";
import { FlexBox } from "./reusables/AllContainers";
import { Box, Typography } from "@mui/material";
import {
  ArrowDropDown,
  MenuOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/langContext";

const Header = () => {
  const { language, setLanguage, langStr } = useContext(LanguageContext);

  const switchLanguage = () => {
    if (language === "HINDI") {
      setLanguage("ENGLISH");
    } else {
      setLanguage("HINDI");
    }
  };

  const navMenuList = [
    { title: langStr.nav_menu.menu_1, link: "/" },
    {
      title: "Live Sessions",
      link: "",
      subMenu: [
        {
          title: "Gita Samagam",
          link: "https://acharyaprashant.org/en/gita",
        },
        {
          title: "Vedanta: Basics to Classics",
          link: "https://acharyaprashant.org/en/vedanta-basics-to-classics",
        },
      ],
    },
    {
      title: "Video Series",
      link: "https://acharyaprashant.org/en/video-modules",
    },
    {
      title: "AP Books",
      link: "https://acharyaprashant.org/en/books",
    },
    {
      title: "AP Articles",
      link: "https://acharyaprashant.org/en/articles",
    },
    {
      title: "Invite",
      link: "",
      subMenu: [
        {
          title: "For a talk",
          link: "https://acharyaprashant.org/en/invite?tIn=0",
        },
        {
          title: "For an Interview",
          link: "https://acharyaprashant.org/en/invite?tIn=1",
        },
      ],
    },
    {
      title: "Donate",
      link: "https://acharyaprashant.org/en/contribute",
    },
  ];

  const navigate = useNavigate();

  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <FlexBox
        sx={{
          height: "3rem",
          justifyContent: "space-between",
          backgroundColor: "var(--color-primary)",
          padding: { md: "1rem 2rem", sm: "1rem", xs: "1rem" },
        }}
      >
        <FlexBox sx={{ width: "fit-content", gap: "2rem" }}>
          <img
            style={{
              height: "2rem",
              width: "2rem",
              cursor: "pointer",
            }}
            src="https://acharyaprashant.org/images/ic_favicon.png"
            alt="Acharya Prashant"
          />
          <FlexBox
            sx={{
              gap: { md: "2rem", sm: "1rem" },
              display: { md: "flex", sm: "flex", xs: "none" },
            }}
          >
            {navMenuList.map((item, idx) => (
              <FlexBox
                onClick={() => {
                  item?.subMenu
                    ? setShowSubMenu(true)
                    : (window.location.href = `${item.link}`);
                }}
                sx={{
                  width: "fit-content",
                  color: "white",
                  height: "100%",
                  gap: 0,
                  cursor: "pointer",
                }}
                key={idx}
              >
                <Typography sx={{ fontSize: "0.875rem", textWrap: "nowrap" }}>
                  {item.title}
                </Typography>
                {item?.subMenu ? <ArrowDropDown /> : <></>}

                {item?.subMenu && showSubMenu && <SubMenu />}
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>

        <FlexBox sx={{ width: "fit-content", color: "white", gap: ".75rem" }}>
          <Box
            sx={{
              color: "white",
              fontWeight: "600",
              border: "2px solid white",
              borderRadius: "0.25rem",
              fontSize: "0.8rem",
              paddingX: "0.5rem",
              display: { lg: "none", md: "none", sm: "none", xs: "flex" },
              alignItems: "center",
            }}
          >
            Donate
          </Box>
          <FlexBox gap={0} sx={{ cursor: "pointer" }} onClick={switchLanguage}>
            <Box
              sx={{
                color: "white",
                fontWeight: "600",
                border: "2px solid white",
                borderRadius: "0.25rem",
                fontSize: "0.8rem",
                paddingX: "0.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              {language === "HINDI" ? "HI" : "EN"}
            </Box>
            <ArrowDropDown />
          </FlexBox>

          <PhoneOutlined
            sx={{
              cursor: "pointer",
              display: { md: "flex", sm: "none", xs: "none" },
            }}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <MenuOutlined />
            <Typography
              fontSize={"0.75rem"}
              ml={"0.125rem"}
              sx={{
                display: { md: "block", sm: "block", xs: "none" },
              }}
            >
              Menu
            </Typography>
          </Box>
        </FlexBox>
      </FlexBox>

      <FlexBox
        sx={{
          backgroundColor: "var(--color-bg-2)",
          color: "white",
          padding: ".875rem 1rem",
          justifyContent: {
            md: "center",
            sm: "space-between",
            xs: "space-between",
          },
        }}
      >
        <Box sx={{ gap: "1rem", display: "flex" }}>
          <Box
            sx={{
              backgroundColor: "rgb(220 38 38)",
              width: "16px",
              marginTop: "0.25rem",
              height: "16px",
              borderRadius: "5rem",
              border: "1px solid white",
              marginRight: "-0.5rem",
              flexShrink: 0,
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: { md: "1.125rem", sm: "1rem", xs: "1rem" },
            }}
          >
            {langStr.header_notice.text}
          </Typography>
        </Box>

        <a
          target="_blank"
          href="https://acharyaprashant.org/hi/contribute/contribute-work?cmId=m00071"
        >
          <Typography
            sx={{
              border: "1px solid white",
              borderRadius: "0.25rem",
              padding: "0.125rem 0.5rem",
              fontSize: "0.875rem",
              width: "max-content",
              textWrap: "nowrap",
              cursor: "pointer",
              color: "white",
            }}
          >
            {langStr.header_notice.button_text}
          </Typography>
        </a>
      </FlexBox>
    </Box>
  );
};

export default Header;

const SubMenu = () => {
  return (
    <>
      <p>Menu</p>
    </>
  );
};
