import { Config } from "tailwindcss";

export default <Config>{
  content: ["app.vue"],
  theme: {
    extend: {
      colors: {
        hw: {
          DEFAULT: "#15818b",
        },
      },
    },
    fontFamily: {
      pre : [ "Pretendard" ]
    }
  },
  plugins: [],
};
