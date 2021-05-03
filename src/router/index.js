import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Me from "../views/Me.vue";
import Education from "../views/Education.vue";
import Experience from "../views/Experience.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
	{
		path: "/me",
		name: "Me",
		component: Me,
	},
	{
		path: "/education",
		name: "Education",
		component: Education,
	},
	{
		path: "/experience",
		name: "Experience",
		component: Experience,
	},
	{
		path: "/projects",
		name: "Projects",
		component: Projects,
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact,
	},
	// {
	// 	path: "/about",
	// 	name: "About",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ "../views/About.vue"),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
