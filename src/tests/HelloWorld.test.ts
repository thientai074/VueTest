import {mount} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import { expect, test } from "vitest";
test("mount component",async()=>{
    expect(HelloWorld).toBeTruthy();

    const wrapper = mount(HelloWorld,{
        props:{
            title:"Guess User Age App",
        },
    });
    expect(wrapper.text()).toContain("Guess User Age App");
})