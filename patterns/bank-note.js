import { defaultFill, defaultOpacity } from './_defaults.js'

export const bankNote = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%2220%22%20viewBox%3D%220%200%20100%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Ebank-note%3C%2Ftitle%3E%3Cpath%20d%3D%22M21.184%2020c.357-.13.72-.264%201.088-.402l1.768-.661C33.64%2015.347%2039.647%2014%2050%2014c10.271%200%2015.362%201.222%2024.629%204.928.955.383%201.869.74%202.75%201.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888%2013.278%2060.562%2012%2050%2012c-10.626%200-16.855%201.397-26.66%205.063l-1.767.662c-2.475.923-4.66%201.674-6.724%202.275h6.335zm0-20C13.258%202.892%208.077%204%200%204V2c5.744%200%209.951-.574%2014.85-2h6.334zM77.38%200C85.239%202.966%2090.502%204%20100%204V2c-6.842%200-11.386-.542-16.396-2h-6.225zM0%2014c8.44%200%2013.718-1.21%2022.272-4.402l1.768-.661C33.64%205.347%2039.647%204%2050%204c10.271%200%2015.362%201.222%2024.629%204.928C84.112%2012.722%2089.438%2014%20100%2014v-2c-10.271%200-15.362-1.222-24.629-4.928C65.888%203.278%2060.562%202%2050%202%2039.374%202%2033.145%203.397%2023.34%207.063l-1.767.662C13.223%2010.84%208.163%2012%200%2012v2z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`