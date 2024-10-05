'use client';
import Image from "next/image";
import styles from "../styles/iconsTech.module.css";
import Collage from "./Collage";
import { useState } from "react";

export default function IconsTech() {
  const [showCards, setShowCards] = useState(null);

  const array = [
    {
      id: 1,
      subtitle: 'html',
      title: 'html',
      img1: '/assets/Proyects/DeportivaxMovil.png',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '/assets/Proyects/bodycalculatorMovil.png',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '/assets/Proyects/CurpClonMovil.png',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '/assets/Proyects/deportivaXDesktop.png',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '/assets/Proyects/bodycalculatorDesktop.png',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNFNjUxMDAiIGQ9Ik00MSw1SDdsMywzNGwxNCw0bDE0LTRMNDEsNUw0MSw1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjZEMDAiIGQ9Ik0yNCA4TDI0IDM5LjkgMzUuMiAzNi43IDM3LjcgOHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjQsMjV2LTRoOC42bC0wLjcsMTEuNUwyNCwzNS4xdi00LjJsNC4xLTEuNGwwLjMtNC41SDI0eiBNMzIuOSwxN2wwLjMtNEgyNHY0SDMyLjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTI0LDMwLjl2NC4ybC03LjktMi42TDE1LjcsMjdoNGwwLjIsMi41TDI0LDMwLjl6IE0xOS4xLDE3SDI0di00aC05LjFsMC43LDEySDI0di00aC00LjZMMTkuMSwxN3oiPjwvcGF0aD4KPC9zdmc+'
    },
    {
      id: 2,
      subtitle: 'css',
      title: 'CSS',
      img1: '/assets/Proyects/DeportivaxMovil.png',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '/assets/Proyects/bodycalculatorMovil.png',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '/assets/Proyects/CurpClonMovil.png',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '/assets/Proyects/deportivaXDesktop.png',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '/assets/Proyects/bodycalculatorDesktop.png',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxIiB4MT0iMTYuMzMiIHgyPSIzMi4yOTMiIHkxPSItMi43NDgiIHkyPSI0MS4xMDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyYWE0ZjQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDdhZDkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjVFFEcmlxc3dyS3dQT25pTHJQVDEyYV83Z2RZNXFOWGFLQzBfZ3IxKSIgZD0iTTcuMTkyLDcuMTc2bDIuNjI3LDI5Ljc3YzAuMTA5LDEuMjM3LDAuOTcsMi4yOCwyLjE2NCwyLjYyMWwxMC42NDMsMy4wNDEJYzAuODk4LDAuMjU3LDEuODQ5LDAuMjU3LDIuNzQ3LDBsMTAuNjQzLTMuMDQxYzEuMTk0LTAuMzQxLDIuMDU1LTEuMzgzLDIuMTY0LTIuNjIxbDIuNjI3LTI5Ljc3QzQwLjkxMSw2LjAwNiwzOS45OSw1LDM4LjgxNiw1CUg5LjE4NEM4LjAxLDUsNy4wODksNi4wMDYsNy4xOTIsNy4xNzZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzM1YzFmMSIgZD0iTTI0LDh2MzEuOWw5Ljg3Ni0yLjgyMmMwLjc5Ny0wLjIyOCwxLjM3MS0wLjkyNCwxLjQ0My0xLjc0OWwyLjI4Ni0yNi4yNDIJQzM3LjY1Niw4LjUwMiwzNy4xOTYsOCwzNi42MDksOEgyNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMuMSwxM0gyNHY0aDQuOWwtMC4zLDRIMjR2NGg0LjRsLTAuMyw0LjVMMjQsMzAuOXY0LjJsNy45LTIuNkwzMi42LDIxbDAsMEwzMy4xLDEzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNmUwZTkiIGQ9Ik0yNCwxM3Y0aC04LjlsLTAuMy00SDI0eiBNMTkuNCwyMWwwLjIsNEgyNHYtNEgxOS40eiBNMTkuOCwyN2gtNGwwLjMsNS41bDcuOSwyLjZ2LTQuMmwtNC4xLTEuNAlMMTkuOCwyN3oiPjwvcGF0aD48cGF0aCBkPSJNMzMuMSwxM2wtMC41LDhsLTAuNywxMS41TDI0LDM1LjFsLTcuOS0yLjZMMTUuOCwyN2g0bDAuMSwyLjVsNC4xLDEuNGw0LjEtMS40bDAuMy00LjVIMjRoLTQuNGwtMC4yLTRIMjRoNC42bDAuMy00SDI0IGgtOC45bC0wLjMtNEgyNEgzMy4xIE0zNC4xNjQsMTJIMzMuMUgyNGgtOS4yaC0xLjA3OGwwLjA4MSwxLjA3NWwwLjMsNEwxNC4xNzIsMThIMTUuMUgyNGgzLjgyMmwtMC4xNSwySDI0aC00LjZoLTEuMDUxIGwwLjA1MiwxLjA1bDAuMiw0TDE4LjY0OSwyNkgxNS44aC0xLjA1NmwwLjA1OCwxLjA1NGwwLjMsNS41bDAuMDM3LDAuNjgybDAuNjQ5LDAuMjE0bDcuOSwyLjZMMjQsMzYuMTUzbDAuMzEzLTAuMTAzbDcuOS0yLjYgbDAuNjQ0LTAuMjEybDAuMDQxLTAuNjc3bDAuNy0xMS41bDAuNS03Ljk5OEwzNC4xNjQsMTJMMzQuMTY0LDEyeiBNMjAuNzYxLDI2SDI0aDMuMzMxbC0wLjE4NSwyLjc2OUwyNCwyOS44NDNsLTMuMTI4LTEuMDY4IGwtMC4wNzMtMS44MTVMMjAuNzYxLDI2TDIwLjc2MSwyNnoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMy4xLDEzbC0wLjUsOGwtMC43LDExLjVMMjQsMzUuMWwtNy45LTIuNkwxNS44LDI3aDRsMC4xLDIuNWw0LjEsMS40bDQuMS0xLjRsMC4zLTQuNUgyNGgtNC40bC0wLjItNEgyNGg0LjZsMC4zLTRIMjQgaC04LjlsLTAuMy00SDI0SDMzLjEgTTMzLjYzMiwxMi41SDMzLjFIMjRoLTkuMmgtMC41MzlsMC4wNCwwLjUzN2wwLjMsNGwwLjAzNSwwLjQ2M0gxNS4xSDI0aDQuMzYxbC0wLjIyNSwzSDI0aC00LjZoLTAuNTI2IGwwLjAyNiwwLjUyNWwwLjIsNGwwLjAyNCwwLjQ3NUgxOS42SDI0aDMuODY2bC0wLjI0MiwzLjYzNEwyNCwzMC4zNzJsLTMuNjE0LTEuMjM0TDIwLjMsMjYuOThMMjAuMjgsMjYuNUgxOS44aC00aC0wLjUyOCBsMC4wMjksMC41MjdsMC4zLDUuNWwwLjAxOSwwLjM0MWwwLjMyNCwwLjEwN2w3LjksMi42TDI0LDM1LjYyNmwwLjE1Ni0wLjA1MWw3LjktMi42bDAuMzIyLTAuMTA2bDAuMDIxLTAuMzM5bDAuNy0xMS41bDAuNS03Ljk5OSBMMzMuNjMyLDEyLjVMMzMuNjMyLDEyLjV6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD4KPC9zdmc+'

    },
    {
      id: 3,
      subtitle: 'js',
      title: 'JS',
      img1: '/assets/Proyects/bodycalculatorMovil.png',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '/assets/Proyects/',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '/assets/Proyects/',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '/assets/Proyects/bodycalculatorDesktop.png',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '/assets/Proyects/',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmN2RmMWUiIGQ9Ik02LDQyVjZoMzZ2MzZINnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAwMDAxIiBkPSJNMjkuNTM4LDMyLjk0N2MwLjY5MiwxLjEyNCwxLjQ0NCwyLjIwMSwzLjAzNywyLjIwMWMxLjMzOCwwLDIuMDQtMC42NjUsMi4wNC0xLjU4NSBjMC0xLjEwMS0wLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtMC44MDctMC4zNDRjLTIuMzI5LTAuOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxYzAtMi40MSwxLjg0NS00LjI0NCw0LjcyOC00LjI0NCBjMi4wNTMsMCwzLjUyOCwwLjcxMSw0LjU5MiwyLjU3M2wtMi41MTQsMS42MDdjLTAuNTUzLTAuOTg4LTEuMTUxLTEuMzc3LTIuMDc4LTEuMzc3Yy0wLjk0NiwwLTEuNTQ1LDAuNTk3LTEuNTQ1LDEuMzc3IGMwLDAuOTY0LDAuNiwxLjM1NCwxLjk4NSwxLjk1MWwwLjgwNywwLjM0NEMzNi40NTIsMjkuNjQ1LDM4LDMwLjgzOSwzOCwzMy41MjNDMzgsMzYuNDE1LDM1LjcxNiwzOCwzMi42NSwzOCBjLTIuOTk5LDAtNC43MDItMS41MDUtNS42NS0zLjM2OEwyOS41MzgsMzIuOTQ3eiBNMTcuOTUyLDMzLjAyOWMwLjUwNiwwLjkwNiwxLjI3NSwxLjYwMywyLjM4MSwxLjYwMyBjMS4wNTgsMCwxLjY2Ny0wLjQxOCwxLjY2Ny0yLjA0M1YyMmgzLjMzM3YxMS4xMDFjMCwzLjM2Ny0xLjk1Myw0Ljg5OS00LjgwNSw0Ljg5OWMtMi41NzcsMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OCBMMTcuOTUyLDMzLjAyOXoiPjwvcGF0aD4KPC9zdmc+'
    },

    {
      id: 4,
      subtitle: 'java',
      title: 'Java',
      img1: '',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '/',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0yMy42NSwyNC44OThjLTAuOTk4LTEuNjA5LTEuNzIyLTIuOTQzLTIuNzI1LTUuNDU1QzE5LjIyOSwxNS4yLDMxLjI0LDExLjM2NiwyNi4zNywzLjk5OWMyLjExMSw1LjA4OS03LjU3Nyw4LjIzNS04LjQ3NywxMi40NzNDMTcuMDcsMjAuMzcsMjMuNjQ1LDI0Ljg5OCwyMy42NSwyNC44OTh6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0Y0NDMzNiIgZD0iTTIzLjg3OCwxNy4yN2MtMC4xOTIsMi41MTYsMi4yMjksMy44NTcsMi4yOTksNS42OTVjMC4wNTYsMS40OTYtMS40NDcsMi43NDMtMS40NDcsMi43NDNzMi43MjgtMC41MzYsMy41NzktMi44MThjMC45NDUtMi41MzQtMS44MzQtNC4yNjktMS41NDgtNi4yOThjMC4yNjctMS45MzgsNi4wMzEtNS41NDMsNi4wMzEtNS41NDNTMjQuMzExLDExLjYxMSwyMy44NzgsMTcuMjd6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTMyLjA4NCAyNS4wNTVjMS43NTQtLjM5NCAzLjIzMy43MjMgMy4yMzMgMi4wMSAwIDIuOTAxLTQuMDIxIDUuNjQzLTQuMDIxIDUuNjQzczYuMjI1LS43NDIgNi4yMjUtNS41MDVDMzcuNTIxIDI0LjA1MyAzNC40NjQgMjMuMjY2IDMyLjA4NCAyNS4wNTV6TTI5LjEyOSAyNy4zOTVjMCAwIDEuOTQxLTEuMzgzIDIuNDU4LTEuOTAyLTQuNzYzIDEuMDExLTE1LjYzOCAxLjE0Ny0xNS42MzguMjY5IDAtLjgwOSAzLjUwNy0xLjYzOCAzLjUwNy0xLjYzOHMtNy43NzMtLjExMi03Ljc3MyAyLjE4MUMxMS42ODMgMjguNjk1IDIxLjg1OCAyOC44NjYgMjkuMTI5IDI3LjM5NXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNMjcuOTM1LDI5LjU3MWMtNC41MDksMS40OTktMTIuODE0LDEuMDItMTAuMzU0LTAuOTkzYy0xLjE5OCwwLTIuOTc0LDAuOTYzLTIuOTc0LDEuODg5YzAsMS44NTcsOC45ODIsMy4yOTEsMTUuNjMsMC41NzJMMjcuOTM1LDI5LjU3MXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNMTguNjg2LDMyLjczOWMtMS42MzYsMC0yLjY5NSwxLjA1NC0yLjY5NSwxLjgyMmMwLDIuMzkxLDkuNzYsMi42MzIsMTMuNjI3LDAuMjA1bC0yLjQ1OC0xLjYzMkMyNC4yNzEsMzQuNDA0LDE3LjAxNCwzNC41NzksMTguNjg2LDMyLjczOXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNMzYuMjgxLDM2LjYzMmMwLTAuOTM2LTEuMDU1LTEuMzc3LTEuNDMzLTEuNTg4YzIuMjI4LDUuMzczLTIyLjMxNyw0Ljk1Ni0yMi4zMTcsMS43ODRjMC0wLjcyMSwxLjgwNy0xLjQyNywzLjQ3Ny0xLjA5M2wtMS40Mi0wLjgzOUMxMS4yNiwzNC4zNzQsOSwzNS44MzcsOSwzNy4wMTdDOSw0Mi41MiwzNi4yODEsNDIuMjU1LDM2LjI4MSwzNi42MzJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTM5LDM4LjYwNGMtNC4xNDYsNC4wOTUtMTQuNjU5LDUuNTg3LTI1LjIzMSwzLjA1N0MyNC4zNDEsNDYuMTY0LDM4Ljk1LDQzLjYyOCwzOSwzOC42MDR6Ij48L3BhdGg+PC9nPgo8L3N2Zz4='
    },

    {
      id: 5,
      subtitle: 'react',
      title: 'REACT',
      img1: '/assets/Proyects/DeportivaxMovil.png',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '/assets/Proyects/deportivaXDesktop.png',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiM4MGRlZWEiIGQ9Ik0yNCwzNEMxMS4xLDM0LDEsMjkuNiwxLDI0YzAtNS42LDEwLjEtMTAsMjMtMTBjMTIuOSwwLDIzLDQuNCwyMywxMEM0NywyOS42LDM2LjksMzQsMjQsMzR6IE0yNCwxNgljLTEyLjYsMC0yMSw0LjEtMjEsOGMwLDMuOSw4LjQsOCwyMSw4czIxLTQuMSwyMS04QzQ1LDIwLjEsMzYuNiwxNiwyNCwxNnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMTUuMSw0NC42Yy0xLDAtMS44LTAuMi0yLjYtMC43QzcuNiw0MS4xLDguOSwzMC4yLDE1LjMsMTlsMCwwYzMtNS4yLDYuNy05LjYsMTAuMy0xMi40YzMuOS0zLDcuNC0zLjksOS44LTIuNQljMi41LDEuNCwzLjQsNC45LDIuOCw5LjhjLTAuNiw0LjYtMi42LDEwLTUuNiwxNS4yYy0zLDUuMi02LjcsOS42LTEwLjMsMTIuNEMxOS43LDQzLjUsMTcuMiw0NC42LDE1LjEsNDQuNnogTTMyLjksNS40CWMtMS42LDAtMy43LDAuOS02LDIuN2MtMy40LDIuNy02LjksNi45LTkuOCwxMS45bDAsMGMtNi4zLDEwLjktNi45LDIwLjMtMy42LDIyLjJjMS43LDEsNC41LDAuMSw3LjYtMi4zYzMuNC0yLjcsNi45LTYuOSw5LjgtMTEuOQljMi45LTUsNC44LTEwLjEsNS40LTE0LjRjMC41LTQtMC4xLTYuOC0xLjgtNy44QzM0LDUuNiwzMy41LDUuNCwzMi45LDUuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMzMsNDQuNmMtNSwwLTEyLjItNi4xLTE3LjYtMTUuNkM4LjksMTcuOCw3LjYsNi45LDEyLjUsNC4xbDAsMEMxNy40LDEuMywyNi4yLDcuOCwzMi43LDE5CWMzLDUuMiw1LDEwLjYsNS42LDE1LjJjMC43LDQuOS0wLjMsOC4zLTIuOCw5LjhDMzQuNyw0NC40LDMzLjksNDQuNiwzMyw0NC42eiBNMTMuNSw1LjhjLTMuMywxLjktMi43LDExLjMsMy42LDIyLjIJYzYuMywxMC45LDE0LjEsMTYuMSwxNy40LDE0LjJjMS43LTEsMi4zLTMuOCwxLjgtNy44Yy0wLjYtNC4zLTIuNS05LjQtNS40LTE0LjRDMjQuNiw5LjEsMTYuOCwzLjksMTMuNSw1LjhMMTMuNSw1Ljh6Ij48L3BhdGg+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iNCIgZmlsbD0iIzgwZGVlYSI+PC9jaXJjbGU+Cjwvc3ZnPg=='
    },
    {
      id: 6,
      subtitle: 'bootstrap',
      title: 'Bootstrap',
      img1: '/assets/Proyects/bodycalculatorMovil.png',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '/assets/Proyects/bodycalculatorDesktop.png',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiM3YzRkZmYiIGQ9Ik03LjM3MywxMS40NDNDNy4yOTMsOS4xMzIsOS4wOTQsNywxMS41MjksN2gyNC45NDZjMi40MzUsMCw0LjIzNiwyLjEzMiw0LjE1NSw0LjQ0MwljLTAuMDc3LDIuMjIxLDAuMDIzLDUuMDk3LDAuNzQ3LDcuNDQzYzAuNzI2LDIuMzUzLDEuOTUxLDMuODQsMy45NTcsNC4wMzF2Mi4xNjdjLTIuMDA2LDAuMTkxLTMuMjMsMS42NzgtMy45NTcsNC4wMzEJYy0wLjcyNCwyLjM0NS0wLjgyNCw1LjIyMi0wLjc0Nyw3LjQ0M0M0MC43MSwzOC44NjgsMzguOTA5LDQxLDM2LjQ3NSw0MUgxMS41MjljLTIuNDM0LDAtNC4yMzYtMi4xMzItNC4xNTUtNC40NDMJYzAuMDc3LTIuMjIxLTAuMDIzLTUuMDk3LTAuNzQ3LTcuNDQzYy0wLjcyNi0yLjM1My0xLjk1NC0zLjg0LTMuOTYtNC4wMzF2LTIuMTY3YzIuMDA2LTAuMTkxLDMuMjMzLTEuNjc4LDMuOTYtNC4wMzEJQzcuMzUsMTYuNTQsNy40NTEsMTMuNjY0LDcuMzczLDExLjQ0M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcuMDczLDIzLjQ2NHYtMC4wMjhjMS44NTMtMC4zMiwzLjI5OS0yLjA1NywzLjI5OS0zLjk3YzAtMS4zNTItMC41Mi0yLjQ5OC0xLjUwNC0zLjMxMgljLTAuOTgxLTAuODEyLTIuMzU3LTEuMjQxLTMuOTgxLTEuMjQxSDE3LjQ1VjMzLjA4aDcuNDc1YzEuOTQyLDAsMy41NTUtMC40NzQsNC42NjMtMS4zNzJjMS4xMDktMC44OTksMS42OTYtMi4yMDcsMS42OTYtMy43ODMJQzMxLjI4MywyNS41NDQsMjkuNTkzLDIzLjc1NiwyNy4wNzMsMjMuNDY0eiBNMjMuNTksMjIuNjA4aC0zLjE4MVYxNy4yOWgzLjc4NGMyLjA3NiwwLDMuMjE5LDAuOTExLDMuMjE5LDIuNTY1CUMyNy40MTMsMjEuNjMsMjYuMDU1LDIyLjYwOCwyMy41OSwyMi42MDh6IE0yMC40MDksMjQuODM0aDMuNzU5YzIuNzE2LDAsNC4wOTIsMC45ODEsNC4wOTIsMi45MTZjMCwxLjkzMi0xLjM1NywyLjk1My0zLjkyNSwyLjk1MwloLTMuOTI2VjI0LjgzNHoiPjwvcGF0aD4KPC9zdmc+'
    },
    {
      id: 7,
      subtitle: 'godot',
      title: 'GODOT',
      img1: '',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '/assets/Proyects/gemadDesktop.png',
      src: '/assets/Icons/godot-svgrepo-com.svg',
    },
    {
      id: 8,
      subtitle: 'vite',
      title: 'VITE',
      img1: '/assets/Proyects/DeportivaxMovil.png',
      subtitle2: 'ccs',
      title2: 'CSS',
      img2: '/assets/Proyects/bodycalculatorMovil.png',
      subtitle3: 'ccs',
      title3: 'CSS',
      img3: '',
      subtitle4: 'ccs',
      title4: 'CSS',
      img4: '/assets/Proyects/deportivaXDesktop.png',
      subtitle5: 'ccs',
      title5: 'CSS',
      img5: '/assets/Proyects/bodycalculatorDesktop.png',
      src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0ib09USWpzT2pUcUpkdmZ5NVM0aUNaYV9kSmpUV01vZ3pGemdfZ3IxIiB4MT0iMTMuMzE1IiB4Mj0iMzguMDA1IiB5MT0iNTE0LjkwNiIgeTI9IjQ4MS4zNzciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDFkMWZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTIzMWJlIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI29PVElqc09qVHFKZHZmeTVTNGlDWmFfZEpqVFdNb2d6RnpnX2dyMSkiIGQ9Ik00NC44Niw5Ljk3NkwyNS4wMjMsNDUuNDQ4Yy0wLjQxLDAuNzMyLTEuNDYyLDAuNzM3LTEuODc4LDAuMDA4TDIuOTE1LDkuOTc5IEMyLjQ2Miw5LjE4NSwzLjE0MSw4LjIyMyw0LjA0MSw4LjM4NGwxOS44NTksMy41NWMwLjEyNywwLjAyMywwLjI1NiwwLjAyMiwwLjM4My0wLjAwMWwxOS40NDMtMy41NDQgQzQ0LjYyMyw4LjIyNSw0NS4zMDUsOS4xOCw0NC44Niw5Ljk3NnoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Im9PVElqc09qVHFKZHZmeTVTNGlDWmJfZEpqVFdNb2d6RnpnX2dyMiIgeDE9IjI1LjUwMiIgeDI9IjM3LjEzMSIgeTE9IjUwOC43NjQiIHkyPSI0MjguOTkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmVkMTAwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTM2MDAxIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI29PVElqc09qVHFKZHZmeTVTNGlDWmJfZEpqVFdNb2d6RnpnX2dyMikiIGQ9Ik0zMy41NzQsMy4wMUwxOS4wMTksNS44NjJjLTAuMjM5LDAuMDQ3LTAuNDE2LDAuMjUtMC40MzEsMC40OTNsLTAuODk1LDE1LjEyMSBjLTAuMDIxLDAuMzU2LDAuMzA2LDAuNjMzLDAuNjU0LDAuNTUybDQuMDUyLTAuOTM1YzAuMzc5LTAuMDg3LDAuNzIyLDAuMjQ2LDAuNjQ0LDAuNjI4bC0xLjIwNCw1Ljg5NSBjLTAuMDgxLDAuMzk3LDAuMjkxLDAuNzM2LDAuNjc5LDAuNjE4bDIuNTAzLTAuNzZjMC4zODgtMC4xMTgsMC43NjEsMC4yMjIsMC42NzksMC42MmwtMS45MTMsOS4yNiBjLTAuMTIsMC41NzksMC42NTEsMC44OTUsMC45NzIsMC4zOThsMC4yMTUtMC4zMzJsMTEuODYtMjMuNjY5YzAuMTk5LTAuMzk2LTAuMTQ0LTAuODQ4LTAuNTc5LTAuNzY0bC00LjE3MSwwLjgwNSBjLTAuMzkyLDAuMDc2LTAuNzI1LTAuMjg5LTAuNjE1LTAuNjczbDIuNzIyLTkuNDM4QzM0LjMwMSwzLjI5OSwzMy45NjcsMi45MzMsMzMuNTc0LDMuMDF6Ij48L3BhdGg+Cjwvc3ZnPg=='
    },
  ]

  const handleClick = (id) => {
    setShowCards(id);
  }


  return (
    <>
      <main>
        <article className={styles.container}>

          {array.map((item) => (
            <Image alt={item.title} key={item.id} className={styles.images} width={70} height={30} onClick={() => handleClick(item.id)} src={item.src} />
          ))}
{/* src={`data:image/svg+xml;base64,${item.src}` */}
        </article>
        {showCards !== null && (<Collage
          title={array.find(item => item.id === showCards)?.title}
          subtitle={array.find(item => item.id === showCards)?.subtitle}

          subtitle2={array.find(item => item.id === showCards)?.subtitle2}
          title2={array.find(item => item.id === showCards)?.title2}

          subtitle3={array.find(item => item.id === showCards)?.subtitle3}
          title3={array.find(item => item.id === showCards)?.title3}

          subtitle4={array.find(item => item.id === showCards)?.subtitle4}
          title4={array.find(item => item.id === showCards)?.title4}

          subtitle5={array.find(item => item.id === showCards)?.subtitle5}
          title5={array.find(item => item.id === showCards)?.title5}

          img1={array.find(item => item.id === showCards)?.img1}
          img2={array.find(item => item.id === showCards)?.img2}
          img3={array.find(item => item.id === showCards)?.img3}
          img4={array.find(item => item.id === showCards)?.img4}
          img5={array.find(item => item.id === showCards)?.img5}
        />)}
      </main>
    </>
  );
}
