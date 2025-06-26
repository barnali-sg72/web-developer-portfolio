import {
  DiEclipse,
  DiGithub,
  DiJavascript,
  DiJqueryLogo,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import {
  FaAws,
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWindows,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDgraph,
  SiExpress,
  SiHibernate,
  SiKubernetes,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Microservices from "./icons/Microservices";
import FullStack from "./icons/FullStack";
import RestApi from "./icons/RestAPI";
import Zookeeper from "./icons/Zookeeper";
import Kafka from "./icons/Kafka";
import Maven from "./icons/Maven";
import { TbBrandTypescript } from "react-icons/tb";

export const Icons = new Map([
  ["React", <FaReact />],
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3Alt />],
  ["Bootstrap", <FaBootstrap />],
  ["Tailwind", <RiTailwindCssFill />],
  ["JQuery", <DiJqueryLogo />],
  ["JavaScript", <DiJavascript />],
  ["TypeScript", <TbBrandTypescript />],
  ["Java", <FaJava />],
  ["Golang", <FaGolang />],
  ["Python", <FaPython />],
  ["Nodejs", <FaNodeJs />],
  ["Express", <SiExpress />],
  ["Spring Boot", <SiSpringboot />],
  ["Hibernate", <SiHibernate />],
  ["Docker", <FaDocker />],
  ["Kubernetes", <SiKubernetes />],
  ["Kafka", <Kafka />],
  ["Zookeeper", <Zookeeper />],
  ["Oracle", <SiOracle />],
  ["Postgres", <SiPostgresql />],
  ["Dgraph", <SiDgraph />],
  ["MySQL", <SiMysql />],
  ["MongoDB", <DiMongodb />],
  ["Linux", <FaLinux />],
  ["Windows", <FaWindows />],
  ["VS Code", <VscVscode />],
  ["Eclipse", <DiEclipse />],
  ["Maven", <Maven />],
  ["Github", <DiGithub />],
  ["Microservices", <Microservices />],
  ["Full-stack", <FullStack />],
  ["REST API", <RestApi />],
  ["AWS", <FaAws />],
]);
