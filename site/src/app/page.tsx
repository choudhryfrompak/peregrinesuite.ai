"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const F = '"Mazzard H", sans-serif'; // font shorthand

const trustedLogos = [
  { alt: "Global Supermarket", src: "/images/integrations-banner.webp", w: 157, h: 61 },
  { alt: "Animal Welfare", src: "/images/expert-avatar.png", w: 113, h: 67 },
  { alt: "Schnithouse", src: "/images/trusted-avatar.webp", w: 90, h: 63 },
  { alt: "Dosa", src: "/images/badge.png", w: 89, h: 62 },
];

const industryTabs = [
  { name: "Sales / Lead Generation", image: "/images/hero-image.png" },
  { name: "Marketing", image: "/images/tab-marketing.png" },
  { name: "Customer Support", image: "/images/tab-customer-support.png" },
  { name: "Healthcare", image: "/images/tab-healthcare.png" },
  { name: "Logistics", image: "/images/tab-logistics.png" },
];

const steps = [
  { title: "Centralized Knowledge Base", desc: "Upload and organize all your company-specific information in one secure hub.", icon: "/images/step-knowledge.svg", bg: "rgb(242,247,255)", border: "rgba(59,130,245,0.2)" },
  { title: "Seamless Integrations", desc: "Connect Peregrine Suite with your existing business tools and systems.", icon: "/images/step-integrations.svg", bg: "rgb(245,237,255)", border: "rgb(241,230,255)" },
  { title: "AI Agent Deployment", desc: "Build domain-specific AI agents that understand your business and workflows.", icon: "/images/step-deployment.svg", bg: "rgb(245,253,255)", border: "rgb(197,243,252)" },
  { title: "Automated Actions", desc: "Agents execute tasks, streamline processes, and drive efficiency across your operations.", icon: "/images/step-automation.svg", bg: "rgb(255,253,247)", border: "rgb(255,247,225)" },
];

const integrations = [
  { name: "Google Calendar", label: "Calendar", bg: "#E5F7FF", icon: "/images/google-calendar.png" },
  { name: "Gmail", label: "Email", bg: "#F4E8FF", icon: "/images/gmail.png" },
  { name: "Microsoft Outlook", label: "Email & Calendar", bg: "#DCFAFF", icon: "/images/outlook.png" },
  { name: "XERO", label: "Accounting", bg: "#E6FBFF", icon: "/images/xero.png" },
  { name: "Quickbooks", label: "Reports", bg: "#EBFFED", icon: "/images/quickbooks.svg" },
  { name: "Dext", label: "Data Extraction", bg: "#FFF0EB", icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjE1IiBmaWxsPSIjRkY1QTAyIi8+PHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5EZXh0PC90ZXh0Pjwvc3ZnPg==" },
  { name: "Deputy", label: "Rostering & Timesheets", bg: "#FFEBE8", icon: "/images/deputy.png" },
  { name: "Hubdoc", label: "Storage & Extraction", bg: "#EBFBFC", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNiAzNCc+PHBhdGggZD0nTTE1Ljk4IDE2LjUyYy44MzUtMy44NTYgMy4wMjEtOC4wOTEgNy45MjEtMTEuNjcxTDguMDg0IDBTMS42MiAzLjk2MiAwIDEyLjQwN0wxNC44NDEgNC45MDhjLS43NjkgNC43NDEtLjEzNCA4LjU3MSAxLjEzOSAxMS42MTJ6JyBmaWxsPScjNDVCOEU4Jy8+PHBhdGggZD0nTTE2LjM0NSAxNi41MmMtMS4zNDEgNi4yMDMuODEgMTEuNDMyLjgxIDExLjQzMkwxLjE3NiAyMy4xMzFDNC4wNTYgMzAuOTQ2IDExLjIyOSAzNCAxMS4yMjkgMzRsMTQuNzcxLTcuNDc0cy02LjYzLTIuNzc3LTkuNjU0LTkuMDA1eicgZmlsbD0nIzI4QjY5NicvPjxwYXRoIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAgNC45MDgpJyBkPSdNMTYuMzQ1IDExLjYxM2MtMS4yNzItMy4wNDItMS45MDctNi44NzItMS4xMzktMTEuNjEzTC4zNjUgNy40OTljLS4yMzQgMS4yMS0uMzY1IDIuNTEzLS4zNjUgMy45MDcgMCAyLjU5MS40NTQgNC44NTMgMS4xNzYgNi44MTdsMTUuOTc5IDQuODIxcy0yLjE1MS01LjIyOS0uODEtMTEuNDMxeicgZmlsbD0nIzAwNUU4RicvPjwvc3ZnPg==" },
  { name: "Zoho", label: "Business Software Suite", bg: "#FDF7E6", icon: "/images/zoho.svg" },
  { name: "Thryv", label: "Small Business MGMT", bg: "#FBF0F0", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0MSAxNyc+PHBhdGggZD0nTTQwLjk1MyAzLjU4MkwzNi45NzUgMS43MDggMzMuNDE2LjAzYy0uMjAzLS4wOTgtLjQxOS4wNTctLjQxOS4yODJWMS4zODNjMCAuMTctLjEyMi4yOTYtLjI4NS4zMUwyMi40MDIgMi41NTMgMTAuMTE1IDMuNTgyeicgZmlsbD0nI0ZGNTAwMCcvPjxwYXRoIGQ9J00zOC43NSAxMy42NDRjMC0uMjY1LjIxNS0uNDc5LjQ3OS0uNDc5cy40NzkuMjE0LjQ3OS40NzktLjIxNC40NzktLjQ3OS40NzktLjQ3OS0uMjE0LS40NzktLjQ3OW0tLjE0OCAwYzAgLjM0Ni4yOC42MjcuNjI2LjYyN3MuNjI2LS4yODEuNjI2LS42MjctLjI4LS42MjctLjYyNi0uNjI3LS42MjYuMjgxLS42MjYuNjI3em0uNTIxLTEuMXYtMi4zaC0uMTA4di0uMjA3aC40NTljLjI4IDAgLjQyOC4xNC40MjguNDU5IDAgLjIyMS0uMTIyLjM4LS4zNDYuMzhoLS4yMjZ2MS42NThoLjQyM3YuMjA3aC0uNjN6bTEuMTg5LTIuM0g0MHYyLjNoLS41MTh2LTIuM3pNNC45NjMgMTIuNDAzdjEuNTY1Yy0uOTc1LS4wMTQtMS45MzUuMDg0LTIuODY5LS4xODNDMS4wMjUgMTMuNDc1LjMyMSAxMi43Ny4xMTggMTEuNjE0Yy0uMDY3LS4zOTUtLjEwOC0uODAzLS4xMDgtMS4yMTItLjAxMy0xLjgzMi0uMDEzLTguNjY4IDAtOC43ODFIMS45NzJWNC42MDlINC45MDlWNi4yMDJIMS45NzJ2My40NjdjMCAuMzI0LjA0MS42NjIuMDgxLjk4Ny4xMzYgMS4wNDMuNjYzIDEuNTY0IDEuNjc4IDEuNjYzLjM5My4wNTYuODEyLjA1NiAxLjIzMi4wODRNMTcuMjc5IDEzLjkyNmMwLS41OTItLjAxMy0zLjQzOSAwLTUuMTAzIDAtLjMyNC4wNDEtLjY2Mi4wODItLjk4Ni4xMzUtMS4wNTcuNjYzLTEuNTY1IDEuNjc4LTEuNjYzLjQwNi0uMDQzLjgxMS0uMDQzIDEuMjMxLS4wNzFWNC41NTNDMTkuMjk2IDQuNTY3IDE4LjMzNSA0LjQ2OCAxNy40MDEgNC43MzZjLTEuMDY5LjMxLTEuNzcyIDEuMDAxLTEuOTc1IDIuMTcxLS4wNjguMzk0LS4xMDkuODAzLS4xMDkgMS4yMTJ2NS44MjFoMS45NjJ6TTE0LjIyMSAxMy45MjZWNy4wNzZjLS4wNTQtMS4yMTItLjg1Mi0yLjEyOS0yLjAwMi0yLjM2OC0uNTI4LS4xMTMtMS4wODMtLjE0MS0xLjYxLS4xNTUtLjgzOS0uMDI4LTEuNjc4LS4wMTQtMi41NTgtLjAxNFYxLjU1MUg2LjA4OXYxMi4zNjFIOC4wNzhWNi4xNzRjLjk2MSAwIDEuODk1LS4wMjkgMi44MjguMDE0LjU4Mi4wMjggMS4wMTUuMzY2IDEuMTkxLjk1OC4xMjIuNDIzLjE4OS44ODguMjAzIDEuMzM5LjAyNyAxLjY3Ny4wMTMgNS4yODYuMDEzIDUuNDQxaDEuOTA4em0xNy4xNTgtOS4zNzNoMS44NjhjLjEwOCAwIC4yNDMuMTU1LjI4NC4yODIuNzg0IDIuMTI4IDIuNTU3IDYuOTkxIDIuNjUyIDcuMjE2LjIxNi0uNDY1IDEuODgxLTQuOTc1IDIuNjc5LTcuMTg4LjA4MS0uMjQuMTg5LS4zMS40MzMtLjMxSDQxYy0uMDQxLjExMy0yLjI4NyA1Ljg2My0zLjM4MyA4LjY0LS4yMy41NjQtLjU4Mi44NzQtMS4xOTEuODZsLS4zOTIgMGMtLjYyMi4wMjgtMS4wMTUtLjI5Ni0xLjI0NS0uODg4LS44NjYtMi4yMTMtMy4xMjYtNy44OTMtMy40MS04LjYxMm0tNy45NTYgMTIuNDQ1Yy41OTUgMCAxLjE1LS4wMTQgMS43MDUgMCAuMjMuMDE0LjMzOC0uMDU2LjQ0Ni0uMjk2IDEuNjc4LTMuOTA0IDMuMzctNy44MDggNS4wNjEtMTEuNzEyLjA1NC0uMTI3LjA5NS0uMjU0LjE2Mi0uNDIzLS42MjIgMC0xLjE5LS4wMTQtMS43NTkgMC0uMjAzIDAtLjI4NC4wNy0uMzY1LjI1NC0uNDQ3IDEuMDcxLS44OTMgMi4xMjgtMS4zNTMgMy4xOTktLjUyOCAxLjI0LTEuMDU2IDIuNDY3LTEuNTk3IDMuNzQ5LS4xNDktLjM1Mi0uMjcxLS42NDgtLjM5Mi0uOTU4LS43NzItMS45NzMtMS41Ny0zLjk2MS0yLjM2OC01LjkzNC0uMDQxLS4xMTMtLjE2My0uMjgyLS4yNTctLjI4Mi0uNjIzLS4wMjgtMS4yNDUtLjAxNC0xLjg5NS0uMDE0LjA0MS4wOTkuMDU0LjE2OS4wODEuMjQgMS4yMDUgMi44MDQgMi40MDkgNS42MjMgMy42MjcgOC40MjguMjAzLjQ2NS4yNTcuODQ2LjAxMyAxLjMyNS0uNDA2Ljc2MS0uNzMgMS41NzktMS4xMDkgMi40MjR6JyBmaWxsPScjMDAwJy8+PC9zdmc+" },
  { name: "Cliniko", label: "Practice Management", bg: "#DCFAFF", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMSAyNic+PHBhdGggZD0nTTEzLjk3OSAxMy41NzZjLjM2NC0uMDQ0IDEuMDczLS4xOSAxLjEzNC4yNjlsLS43NDEgNy41ODJjLS4yNDEuNzMxLjg0OSAyLjQ0NCAxLjYzNCAyLjIxMy4yNzYtLjA4MSAxLjI0Mi0xLjIxNyAxLjI5NS0xLjUxM2wtLjgzOC04LjAyOGMuMDk5LTEuMTMxIDIuMjM2LS4zMjYgMi44NjItLjA1NSAzLjEyMyAxLjM1MyA1LjIxOSA1LjAzNyA2LjAyNyA4LjE3MS4xNzkuNjk1LjU0NSAyLjE3OS41MyAyLjgzNS0uMDEzLjU1OS0uNDQ3LjkzNi0xLjAxNS45MDVMNi43MDYgMjUuOTU3Yy0xLjQyMy0uMTIxLS44MDYtMS45Ny0uNjA3LTIuODk5Ljc5Ny0zLjcxIDMuNjAzLTguOTY1IDcuODgtOS40ODF6JyBmaWxsPScjMDBBOENEJy8+PHBhdGggZD0nTTcuNDgyIDIuOTc2YzEuNjgtLjE3OCAxLjE5Ny43MTkgMi4yMzIgMS40NzQuOTgyLjcxNiAxLjU1NS4wMDMgMi4yMDctLjcyOC41OTgtLjY3LjItMS44NTUgMS4zOTgtLjc2NC40OS4wMzggMS44MjEuMjI1IDEuOTg0LjY5OS4zNTQgMS4wMzctLjQxMy43ODMtMS4wNzYgMS4wMDUtMi42MjMuODg0LTMuOTEyIDMuNDI4LTIuODg3IDYuMDE5LjE4MS40NTYuOTIxIDEuMjY0LjgxNyAxLjU3Ni0uMDU5LjE3Ni0xLjQ3Ny44NDctMS43NjkgMS4wMzktMy4yODMgMi4xNTYtNS4zMjcgNS40OTItNi4xMzIgOS4yNzItLjE0NS42NzktLjI1NCAyLjUzLS41NDMgMi45Ni0uMzcyLjU1NC0yLjM3Ny41MjQtMi45ODMuMzkxQy0uMzQ4IDI1LjY4My4wNiAyMy42MDEuMTUzIDIyLjc1NWMuNDgzLTQuMzc5IDIuMzMxLTguNzcgNi4wMTgtMTEuNDMyLjM0NC0uMjQ5IDIuMjgyLTEuMjkyIDIuMzE4LTEuNDU5LjA0OC0uMjI0LTEuMDIxLS43MDEtMS4yODMtLjkwMy0uODk3LS42OTEtMS43NTgtMi4wODQtMS44OTEtMy4yMDItLjA1Mi0uNDM4LS4wNDMtMS44NzQuMTczLTIuMjE0QzUuNjIxIDMuMzM0IDcuMTQ5IDMuMDExIDcuNDgyIDIuOTc2eicgZmlsbD0nIzZBRDBFMicvPjxwYXRoIGQ9J00yMS40NzMgMi45NjhjNC4wNjgtLjQ1OSA2LjY5IDQuMjI5IDQuMTM2IDcuMzE0LS40NTguNTUyLTEuMDg1Ljg0OS0xLjUzIDEuMzc1IDMuNzUzIDIuNjkyIDYuMDM0IDYuNTg1IDYuNzIgMTEuMTA4LjA5Ni42MzQuMzg3IDIuNDMzLjAyMyAyLjg3NS0uMzIyLjM5LTIuMzY0LjM5Mi0yLjg4Mi4yOTQtLjg5Ni0uMTY3LS44MjItMi4xMjUtLjk4MS0yLjg5QzI2LjIyNyAxOS41MTQgMjQuODIgMTYuNjY0IDIyLjA1NCAxNC4yNTJjLS45NDMtLjgyMy0yLjA4MS0xLjQwMy0yLjk4Ny0yLjI0MiAxLjE1NS0xLjgzNyAxLjU0LTMuOTUyLjEtNS43NjEtLjc2Mi0uOTU2LTEuNjQ1LS45NTgtLjI0NC0yLjE3Mi42ODItLjU5MSAxLjY0MS0xLjAwNiAyLjU1LTEuMTA5eicgZmlsbD0nIzA1QzJERCcvPjxwYXRoIGQ9J00xNC42MTkgMi41NjhjLS41MDktLjIwNi0xLjI1Ny0uMTcyLTEuNzQ3LS4zOS0uMzI2LS4xNDUtLjM1Ni0uNTExLS43MzktLjcxOUMxMS4yNTUuOTgyIDkuMzQuOTU5IDguNTQ5IDEuNjAyYy0uMTk1LjE1OS0uMjgzLjQyOS0uNDM1LjUzNi0uMTk1LjEzNy0xLjU4OC40MTMtMS44OTQuNDMxLS4zNTEuMDIxLS4xNzktLjM2OC0uMDY2LS41NDlDNi42NDIgMS4yMzcgOC4zNjIuMTY5IDkuMjk3LjA0OSAxMS4zMTMtLjIxIDEzLjg4OS41NDYgMTQuNjE5IDIuNTY4eicgZmlsbD0nIzZCRDFFMicvPjxwYXRoIGQ9J005LjkyNiAxLjg3N2MuNDQtLjA3MSAxLjc0OS0uMDI0IDEuODUxLjUzLjA3Ny40MjItMS4wNjYgMi4xNDQtMS45NDIgMS4zMDctLjY1Ny0uNjI4LTEuMTg3LTEuNjMxLjA5MS0xLjgzN3onIGZpbGw9JyMwNEFBQ0UnLz48cGF0aCBkPSdNMTMuODUzIDEwLjA2NmMuNTM2LS4xNzMgMS4yNDkuNzQ0IDIuNDc0LjM4Ny4yNjYtLjA3OCAxLjM3Ny0uODYgMS4zNzMuMDIxLS4wMDMuNzA1LTEuOTE3IDEuMDg5LTIuNTA3IDEuMDEyLS42MTUtLjA4LTIuMjY0LTEuMTIxLTEuMzQtMS40MnonIGZpbGw9JyMwOEFCQ0YnLz48L3N2Zz4=" },
  { name: "Karbonhq", label: "Practice Management", bg: "#F4F4F5", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyOSAzMCc+PHBhdGggZD0nTTUuNjU5IDMuMjI2Yy0uNjI1IDAtMS4xMzEuNTA1LTEuMTMxIDEuMTI4djIxLjI5MWMwIC42MjQuNTA2IDEuMTI5IDEuMTMxIDEuMTI5LjYyNiAwIDEuMTMyLS41MDUgMS4xMzItMS4xMjlWNC4zNTVjMC0uNjI0LS41MDYtMS4xMjktMS4xMzItMS4xMjl6TTEuMTMyIDEwLjk2OGMtLjYyNSAwLTEuMTMyLjUwNS0xLjEzMiAxLjEyOHY1LjgwOGMwIC42MjIuNTA3IDEuMTI4IDEuMTMyIDEuMTI4LjYyNSAwIDEuMTMyLS41MDYgMS4xMzItMS4xMjh2LTUuODA4YzAtLjYyMy0uNTA3LTEuMTI4LTEuMTMyLTEuMTI4em05LjA1NS0xMC4zMjNjLS42MjUgMC0xLjEzMS41MDYtMS4xMzEgMS4xMjl2MjYuNDUyYzAgLjYyMy41MDYgMS4xMjggMS4xMzEgMS4xMjguNjI1IDAgMS4xMzItLjUwNSAxLjEzMi0xLjEyOFYxLjc3NGMwLS42MjMtLjUwNy0xLjEyOS0xLjEzMi0xLjEyOXpNMjguNjY4IDE5LjQ2OWwtNC40ODctNC40NzUgNC40NjEtNC40NWMuNDQxLS40NDMuNDQxLTEuMTU1IDAtMS41OTctLjIxMi0uMjExLS41LS4zMy0uODAxLS4zM3MtLjU4OC4xMTktLjc5OS4zM0wxNS44NDcgMjAuMTEydi0zLjI4OWwxMC4zNzgtMTAuMzEyYy40NDMtLjQ0MS40NDUtMS4xNTUuMDAzLTEuNTk3LS4yMTEtLjIxMy0uNDk5LS4zMzItLjgtLjMzM3MtLjU4OS4xMTgtLjgwMS4zM0wxNS44NDcgMTMuNjM2di0zLjEwMmw2Ljg3LTYuODUzYy40NDItLjQ0Mi40NDItMS4xNTUgMC0xLjU5Ny0uMjEyLS4yMTEtLjUtLjMzLS44LS4zM3MtLjU4OC4xMTktLjguMzNsLTUuMjcgNS4yNTZWMS4xMjlDMTUuODQ3LjUwNSAxNS4zNCAwIDE0LjcxNSAwYy0uNjI1IDAtMS4xMzIuNTA1LTEuMTMyIDEuMTI5djI3Ljc0MmMwIC42MjMuNTA3IDEuMTI5IDEuMTMyIDEuMTI5LjYyNSAwIDEuMTMyLS41MDYgMS4xMzItMS4xMjl2LTUuNDQ4bDQuNzY2IDQuNzUzYy4yMTEuMjEyLjUuMzMyLjguMzMycy41ODgtLjEyLjgwMS0uMzMyYy40NDEtLjQ0Mi40NDEtMS4xNTQgMC0xLjU5NmwtNC44MjQtNC44MTIgMS43OTQtMS43OTEgNS4yNjkgNS4yNTZjLjIxMS4yMTIuNS4zMzEuODAxLjMzMXMuNTg4LS4xMTkuODAxLS4zMzFjLjQ0MS0uNDQyLjQ0MS0xLjE1NCAwLTEuNTk3bC01LjI2OS01LjI1NSAxLjc5NC0xLjc5MSA0LjQ4OCA0LjQ3NmMuMjExLjIxMi40OTkuMzMyLjguMzMycy41ODgtLjEyLjc5OS0uMzMyYy40NDMtLjQ0Mi40NDMtMS4xNTUgMC0xLjU5N3onIGZpbGw9JyMwMDAnLz48L3N2Zz4=" },
  { name: "ServiceM8", label: "Job Management", bg: "#F4FCF2", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyOCAyOCc+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nMCcgeDI9JzEnIHkxPScuOTkzJyB5Mj0nLjAwNyc+PHN0b3Agb2Zmc2V0PScwJyBzdG9wLWNvbG9yPScjNTBCNTQ4Jy8+PHN0b3Agb2Zmc2V0PScxJyBzdG9wLWNvbG9yPScjN0ZDMjQ5Jy8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0nTTI3LjkzNyA0LjQ2M2MtLjMyNS0yLjQ5NC0yLjMzOC00LjMzNi00Ljg0LTQuNDYzSDQuODYxYy0yLjU1Mi4xMjktNC42MjYgMi4xNzEtNC44MTEgNC43MjktLjExNCAxLjU3NC4wMDQgMy40MjcuMDAxIDUuMDM0LS4wMDggNC40OTEuMDA3IDguOTgzLS4wMDIgMTMuNDc1LjE0NyAyLjQ5NiAyLjE2MyA0LjU1OCA0LjY0MyA0Ljc2MkwyMy4zIDI4YzIuNDY1LS4xODYgNC41NDQtMi4yNTEgNC42NDEtNC43NDcuMDU2LS4wMzUuMDM0LS4xMjguMDM1LS4xODUuMDY1LTYuMTk4LS4wMTktMTIuNDEtLjAzOS0xOC42MDR6bS01LjAyOSA1LjI3MWMtLjg3MiAxLjc1LTIuNjggMi4wNjgtNC40MjQgMi4zMjktMi4wNzUuNDk4LTIuODI3IDEuNzc1LTIuMjI1IDMuODA4bC41MTIgMS42NDNjMS42MDUgNS4wMzQtMy45NjcgOC44NTctOC40OTQgNy4wMi00LjE4NS0xLjY5Ny01LjQzNS03LjI4Mi0yLjI5Ni0xMC41ODEgMS41NDctMS42MjYgMy4zODUtMS41NDcgNS40MzYtMS40MTkgMS45OTItLjAyMiAzLjIzNy0uNjA0IDMuMjg4LTIuODQxbC0uMDY4LS4xMDFjLjA3NS0uMTk1LjA4Ny0uNDE1LjAzNi0uNjYtLjIwNy0xLjU4Mi0uMzM4LTIuOTQzLjc0OS00LjIzOCAxLjYxMS0xLjkxOCA0LjUyOS0yLjE0MSA2LjQyNC0uNTE3IDEuNDU3IDEuMjQ3IDEuOTUyIDMuMjUyIDEuMzE3IDUuMDZsLjAxNy4xNTJjLS4xMTkuMTE1LS4yMS4yNjMtLjI3Mi40NDR6bTUuMDIgLS41MTNoLjAxNHYxLjEyNmMtLjAwNS0uMzc3LS4wMDktLjc1Mi0uMDE0LTEuMTI2eicgZmlsbD0ndXJsKCNhKScvPjxwYXRoIGQ9J00yMy4xOCA5LjI4NGMtLjQ0NSAxLjE5Ny0xLjQwNiAyLjA3NS0yLjYyNyAyLjQzMS0xLjA4Ny4zMTctMi40NjMuMjkzLTMuNDA4Ljk1MS0yLjA4IDEuNDQ3LS4zNzcgMy44NzIuMDg1IDUuNzYgMS40OTIgNy43NDctNC4xMzMgMTEuMjMzLTEwLjM3NyA4LjIwNC00LjgtLjQ0NS02LjcyMS02LjE5Ni00LjAwNC05LjUyNS45MzUtMS43MTMgMi40MDctMi44MDIgNC4zODktMi45MTYgMS44NjItLjEwNiA0LjQ5NS42MzYgNS4xNTktMS43NjkuMTA1LS4zNzcuMTI3LS42ODcuMTI3LTEuMDc2LS4wMDItMS4xMjItLjMyNy0yLjE5LS4wODUtMy4zMjIuMzE0LTEuNDc0IDEuNjU3LTIuNjk5IDMuMDgzLTMuMDc1IDMuNzUtLjk4OCA2LjkwNCAyLjUzNiA1LjU0NCA2LjE5M3onIGZpbGw9JyNGNkY5RkMnLz48L3N2Zz4=" },
  { name: "Coreplus", label: "Practice Management", bg: "#FFF4EB", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48Y2lyY2xlIGN4PSc1MCcgY3k9JzUwJyByPSc0NScgZmlsbD0nbm9uZScgc3Ryb2tlPScjRkY2RjAwJyBzdHJva2Utd2lkdGg9JzYnLz48cGF0aCBkPSdNNTAgMjV2NTBNMjUgNTBoNTAnIHN0cm9rZT0nI0ZGNkYwMCcgc3Ryb2tlLXdpZHRoPScxMCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PGNpcmNsZSBjeD0nNTAnIGN5PSc1MCcgcj0nMTUnIGZpbGw9JyNGRjZGMDAnLz48L3N2Zz4=" },
];

const blogs = [
  { title: "Why accounting firms are primed to use AI agents in their work Copy", date: "Sep 5, 2025", image: "/images/blog1.jpg", href: "/blog/why-accounting-firms-are-primed-to-use-ai-agents-in-their-work-copy" },
  { title: "The Age of AI Agents: Unlocking Transformative Potential Across Every Industry", date: "Sep 5, 2025", image: "/images/blog2.jpg", href: "/blog/unlocking-transformative-potential-across-every-industry" },
  { title: "The Voice Revolution: How AI Voice Agents Are Transforming Human-Computer Interaction", date: "Sep 5, 2025", image: "/images/blog3.jpg", href: "/blog/how-ai-voice-agents-are-transforming-human-computer-interaction" },
];

/* ------------------------------------------------------------------ */
/*  Integration card component                                         */
/* ------------------------------------------------------------------ */
function IntCard({ item }: { item: typeof integrations[0] }) {
  return (
    <div className="flex-shrink-0 flex flex-row items-center" style={{ backgroundColor: item.bg, height: 73, borderRadius: 10, padding: "0 24px 0 20px", gap: 15 }}>
      <div className="flex-shrink-0" style={{ width: 32, height: 32 }}>
        <img src={item.icon} alt={item.name} width={32} height={32} className="object-contain w-full h-full" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="whitespace-nowrap" style={{ fontFamily: F, fontSize: 16, lineHeight: "24px", color: "rgb(23,26,31)", letterSpacing: "-0.2px" }}>{item.name}</p>
        <p className="whitespace-nowrap" style={{ fontFamily: F, fontSize: 14, lineHeight: "24px", color: "rgb(83,82,91)", letterSpacing: "-0.2px" }}>{item.label}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const w = window as any;
    const initCal = () => {
      (function (C: any, A: string, L: string) {
        let p = function (a: any, ar: any) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () { p(api, arguments); };
            const ns = ar[1];
            api.q = api.q || [];
            if (typeof ns === "string") {
              cal.ns[ns] = cal.ns[ns] || api;
              p(cal.ns[ns], ar);
              p(cal, ["initNamespace", ns]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(w, "https://app.cal.com/embed/embed.js", "init");
      w.Cal("init", "30min", { origin: "https://app.cal.com" });
      w.Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        calLink: "peregrine-suite-ai/30min",
        layout: "month_view",
      });
      w.Cal.ns["30min"]("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    };
    initCal();
  }, []);

  return (
    <>
      {/* ========== HERO ========== */}
      <section
        className="relative hero-container"
        style={{ minHeight: "81.5vh", background: "linear-gradient(234deg, rgba(59,130,246,0.2) -13%, #fff 40%)", overflowX: "clip", overflowY: "visible" }}
      >
        {/* Decorative SVG lines */}
        <div className="absolute pointer-events-none opacity-10 hidden lg:block" style={{ top: -199, right: -209, width: 403, height: 617, transform: "rotate(6deg)" }}>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 157, left: "54%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 133, left: "44%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <div className="absolute pointer-events-none opacity-10 hidden lg:block" style={{ bottom: -302, left: -209, width: 403, height: 617, transform: "rotate(180deg)" }}>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 157, left: "54%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 133, left: "44%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="relative flex flex-row items-center justify-center hero-inner" style={{ padding: "20px 0 0 60px", minHeight: "81.5vh", maxWidth: 1480, margin: "0 auto", overflow: "hidden" }}>
          {/* Left column */}
          <div className="hero-left flex flex-col" style={{ gap: 53 }}>
            {/* Absolutely-positioned text container: 688 × 327 */}
            <div className="hero-text-box relative" style={{ width: 688, maxWidth: "100%", height: 327 }}>
              {/* "AI Agents" - top:23 */}
              <div className="absolute" style={{ top: 23, left: 0, fontFamily: F, fontWeight: 700, fontSize: 60, lineHeight: "70px", letterSpacing: "-0.3px", background: "linear-gradient(287deg, rgb(177,76,245) 0%, rgb(72,164,253) 91%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AI Agents
              </div>
              {/* "for End to End / Business Operations" - top:98 */}
              <div className="absolute" style={{ top: 98, left: 0, width: 546, fontFamily: F, fontWeight: 500, fontStyle: "italic", fontSize: 40, lineHeight: "48px", letterSpacing: "-0.3px", color: "rgb(59,130,246)" }}>
                <p>for End to End</p>
                <p>Business Operations</p>
              </div>
              {/* Description - bottom:34 */}
              <p className="absolute" style={{ bottom: 34, left: 0, width: 510, fontFamily: F, fontWeight: 400, fontSize: 20, lineHeight: "30px", color: "rgb(74,74,74)" }}>
                Peregrine Suite AI is an agent building platform that helps build amazing agents that transform your business by saving time and driving higher ROI
              </p>
            </div>

            {/* CTA button */}
            <Link
              href="/contact-us"
              className="group btn-glow inline-flex items-center self-start transition-all duration-300"
              style={{ background: "linear-gradient(110deg, rgb(59,130,246) 0%, rgb(59,130,246) 100%)", borderRadius: 30, height: 56, padding: "15px 20px", fontFamily: F, fontWeight: 500, fontSize: 14, lineHeight: "16.8px", color: "#fff" }}
            >
              <span className="transition-all duration-300">
                Build Agents Now
              </span>
              <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right - hero image */}
          <div className="shrink-0">
            <Image
              src="/images/peregrine-icon.png"
              alt="Peregrine Suite AI"
              width={497}
              height={497}
              className="animate-float cursor-grab select-none hero-image"
              style={{ width: 497, height: 497, objectFit: "cover", touchAction: "none" }}
              draggable={false}
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== TRUSTED BY ========== */}
      <section className="flex flex-col items-center" style={{ padding: "60px 0 0", gap: 40 }}>
        <ScrollFadeIn>
          <div className="flex flex-col items-center" style={{ gap: 10 }}>
            <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>Trusted by</p>
            <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>businesses and enterprises globally</p>
          </div>
        </ScrollFadeIn>
        {/* Sliding logo carousel */}
        <ScrollFadeIn delay={100}>
          <div className="overflow-hidden" style={{ height: 175, WebkitMaskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)", maskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)" }}>
            <div className="marquee-track items-center trusted-row" style={{ gap: 180, padding: "12px 104px", height: "100%", animationDuration: "20s" }}>
              {[...trustedLogos, ...trustedLogos, ...trustedLogos, ...trustedLogos].map((logo, i) => (
                <div key={i} className="shrink-0 overflow-hidden" style={{ width: logo.w, height: logo.h }}>
                  <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* ========== AGENTIC AI ========== */}
      <section className="overflow-hidden" style={{ backgroundColor: "rgba(237,237,237,0.25)", padding: "41px 20px" }}>
        <div className="flex flex-col items-center" style={{ gap: 50 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>Agentic AI -</p>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Build for every Industry</p>
            </div>
          </ScrollFadeIn>

          {/* LEFT tabs + RIGHT image — Framer's row layout */}
          <ScrollFadeIn>
            <div className="tabs-panel flex flex-row" style={{ width: 1000, maxWidth: "100%", gap: 64 }}>
              {/* Left vertical tab column */}
              <div className="tabs-left flex flex-col shrink-0 justify-center" style={{ width: "min-content", gap: 16 }}>
                {industryTabs.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setTab(i)}
                    className="text-left transition-colors"
                    style={{
                      fontFamily: F, fontWeight: 500, fontSize: 20, lineHeight: "20px",
                      width: 285, height: 58, padding: "0 20px", borderRadius: 10,
                      backgroundColor: tab === i ? "rgb(59,130,246)" : "transparent",
                      color: tab === i ? "#fff" : "rgba(33,33,33,0.25)",
                    }}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              {/* Right image panel */}
              <div className="tabs-right flex-1 flex items-center justify-center">
                <div style={{ border: "1px solid rgba(33,33,33,0.25)", borderRadius: 16, overflow: "hidden", width: "100%", aspectRatio: "1.26619" }}>
                  <Image src={industryTabs[tab].image} alt={industryTabs[tab].name} width={2640} height={2080} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== HOW PEREGRINE SUITE WORKS ========== */}
      <section id="solutions" className="overflow-hidden" style={{ backgroundColor: "#fff", padding: "50px 40px" }}>
        <div className="flex flex-col items-center" style={{ gap: 60 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>How</p>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Peregrine Suite Works</p>
            </div>
          </ScrollFadeIn>

          {/* 2×2 grid, gap 10px */}
          <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(50px,1fr))", gridTemplateRows: "repeat(2, minmax(0,1fr))", gap: 10, justifyContent: "center" }}>
            {steps.map((s, i) => (
              <ScrollFadeIn key={s.title} delay={i * 100}>
                <div className="flex flex-col items-center justify-center text-center" style={{ backgroundColor: s.bg, border: `2px solid ${s.border}`, borderRadius: 20, height: 340, padding: 20, gap: 20 }}>
                  <div style={{ width: 228, height: 112, overflow: "hidden" }}>
                    <Image src={s.icon} alt={s.title} width={228} height={112} className="w-full h-full object-contain" />
                  </div>
                  <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, lineHeight: "21.6px", color: "rgb(23,26,31)" }}>{s.title}</h2>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgb(83,82,91)", maxWidth: 247 }}>{s.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INTEGRATIONS ========== */}
      <section className="overflow-hidden" style={{ padding: "50px 30px" }}>
        <div className="flex flex-col items-center" style={{ gap: 30 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Integrations</p>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>No Matter The Task, Achieve Automation With No-Code with 200+ Integration</p>
            </div>
          </ScrollFadeIn>

          <div className="w-full" style={{ WebkitMaskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)", maskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)" }}>
            {/* Row 1 */}
            <div className="marquee-track" style={{ gap: 10, marginBottom: 10 }}>
              {[...integrations, ...integrations].map((item, i) => <IntCard key={`a${i}`} item={item} />)}
            </div>
            {/* Row 2 — reverse */}
            <div className="marquee-track" style={{ gap: 10, animationDirection: "reverse" }}>
              {[...integrations.slice().reverse(), ...integrations.slice().reverse()].map((item, i) => <IntCard key={`b${i}`} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ========== LATEST BLOGS ========== */}
      <section className="blogs-section overflow-hidden" style={{ backgroundColor: "#fff", padding: 80 }}>
        <div className="flex flex-col items-center" style={{ gap: 50 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Latest Blogs</p>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>Get the Peregrine Suite AI update highlights</p>
            </div>
          </ScrollFadeIn>

          {/* 3-col grid: row-gap 0, col-gap 27 */}
          <div className="w-full blogs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(50px,1fr))", columnGap: 27, rowGap: 0 }}>
            {blogs.map((b, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Link href={b.href} className="flex flex-col" style={{ gap: 30, textDecoration: "none" }}>
                  <div className="blog-image-box overflow-hidden" style={{ borderRadius: 12, border: "1px solid rgb(221,225,240)", width: "100%", aspectRatio: "467/283" }}>
                    <Image src={b.image} alt={b.title} width={467} height={283} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h6 style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.02em", color: "#000" }}>{b.title}</h6>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: "1.6em", letterSpacing: "-0.02em", color: "rgb(136,136,136)" }}>{b.date}</p>
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 500, fontSize: 14, lineHeight: "16.8px", color: "rgb(59,130,246)" }}>Read more</div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TALK TO OUR EXPERT ========== */}
      <section className="cta-section overflow-hidden" style={{ backgroundColor: "#fafafa", padding: "100px 100px 50px" }}>
        <div className="cta-inner flex flex-row items-start justify-center" style={{ gap: 10 }}>
          {/* Left text */}
          <ScrollFadeIn>
            <div className="flex-1 flex flex-col" style={{ gap: 10 }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Talk to Our Expert</p>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 26, letterSpacing: "-0.66px", lineHeight: "120%", color: "rgb(133,133,133)", maxWidth: 500 }}>
                Get personalized guidance and clear solutions for your needs&mdash;talk directly with our expert today.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Cal.com embed */}
          <ScrollFadeIn delay={200}>
            <div id="my-cal-inline-30min" className="cta-cal shrink-0 overflow-hidden bg-white" style={{ width: 793, maxWidth: "100%", height: 458 }} />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
