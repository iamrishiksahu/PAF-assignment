import React, { useEffect, useState } from "react";
import { FlexBox } from "./reusables/AllContainers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { axiosInstance } from "../api/axiosInstance";
import {
  ArrowDownward,
  ArrowDropDown,
  KeyboardArrowDown,
} from "@mui/icons-material";

const FAQs = () => {
  const [faqs, setFaqs] = useState();

  const fetchFAQs = async () => {
    try {
      const res = await axiosInstance.get("/courses/faqs?language=english");
      setFaqs(res.data);
    } catch (err) {
      console.err(err);
      alert("Something went wrong while loading the FAQs!");
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);
  return (
    <>
      <FlexBox
        sx={{
          flexDirection: { md: "row", xs: "column" },
          alignItems: "flex-start",
          width: "calc(100% + 4rem )",
          backgroundColor: "rgb(248 250 252)",
          padding: { md: "4rem", sm: "2rem", xs: "2rem" },
          position: "relative",
          left: "-2rem",
        }}
      >
        <Box
          sx={{
            marginRight: "4rem",
            marginBottom: "1rem",
            width: { md: "40%", xs: "100%" },
          }}
        >
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--text-1)",
              mb: ".5rem",
            }}
          >
            FAQs
          </Typography>
          <Typography>
            Can’t find the answer you’re looking for? Reach out to our{" "}
            <a
              target="_blank"
              href="https://acharyaprashant.org/en/technical-support"
              style={{ color: "var(--color-secondary)", cursor: "pointer" }}
            >
              support
            </a>{" "}
            team.
          </Typography>
        </Box>

        {faqs ? (
          <FlexBox column gap={0}>
            {faqs.map((item, idx) => {
              return (
                <FAQItem
                  key={idx}
                  title={item.question}
                  details={item.answer}
                />
              );
            })}
          </FlexBox>
        ) : (
          <></>
        )}
      </FlexBox>
    </>
  );
};

export default FAQs;

const FAQItem = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        onClick={() => setExpanded((prev) => !prev)}
        sx={{
          marginBottom: "0.5rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Typography sx={{ color: "var(--text-2)", fontWeight: 600 }}>
          {title}
        </Typography>
        <KeyboardArrowDown sx={{ color: "var(--text-2)" }} />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateRows: expanded ? "1fr" : "0fr",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
          transition: "grid-template-rows 500ms",
          borderBottom: "1.5px solid var(--faq-border-color)",
        }}
      >
        <div
          style={{ overflow: "hidden", color: "var(--text-2)" }}
          dangerouslySetInnerHTML={{ __html: details }}
        ></div>
      </Box>
    </Box>
  );
};
