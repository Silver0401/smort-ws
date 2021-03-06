
// Libraries
import React, { useEffect, useState, Suspense, useContext, useRef } from "react";
import anime from "animejs";
import Particles from "react-tsparticles";
import { Canvas } from "@react-three/fiber";
import { ChosenDataContext } from "./../ChosenData";
import { useTranslation } from "react-i18next";
import { useGLTF } from "@react-three/drei";
// import { OrbitControls } from "@react-three/drei";

// Resources
import DudFoto from "./../../resources/dud.jpg"; 
import ParallaxBg from "./../../resources/AnimSpaceBG2.jpg";
import RocksBg from "./../../resources/rocks-bg.png";
import Moon from "./../../resources/planeta.png"
import Rock1 from "./../../resources/rock1.png"
import Rock2 from "./../../resources/rock2.png"
import Rock3 from "./../../resources/rock3.png"


const ChooseStyle = (props:any) => {

  const { t } = useTranslation()
  const [PageNumbertoDisplay, setPageNumberToDisplay] = useState(0)
  let PagesList:any[] = []
  const [Data, setData] = useContext(ChosenDataContext)

  const ParallaxSceneRef = useRef <HTMLDivElement> (null)
  const ParallaxBgRef = useRef <HTMLImageElement> (null)
  const RocksBgRef = useRef <HTMLImageElement> (null)
  const Rock1Ref = useRef <HTMLDivElement> (null)
  const Rock2Ref = useRef <HTMLDivElement> (null)
  const Rock3Ref = useRef <HTMLDivElement> (null)
  const MoonRef = useRef <HTMLDivElement> (null)
  const RockList = [Rock1Ref, Rock2Ref, Rock3Ref, MoonRef, ParallaxBgRef, RocksBgRef]


  // Functions
  const ChangePageTo = (direction:string) => {

    if (direction === "Right" && PageNumbertoDisplay === PagesList.length - 1) setPageNumberToDisplay(0)

    else if (direction === "Right") {
      setPageNumberToDisplay(PageNumbertoDisplay + 1)
    }
    if (direction === "Left" && PageNumbertoDisplay === 0) setPageNumberToDisplay(PagesList.length - 1)

    else if (direction === "Left") {
      setPageNumberToDisplay(PageNumbertoDisplay - 1)
    }
    
  }

  const DisplayPageNumber = (PageNumber:number) => {

    return(PagesList[PageNumber])
  }

  const ParallaxAnimation = (data:any) => {

    RockList.forEach((rock) => {
      
      if (ParallaxSceneRef && ParallaxSceneRef.current){
        
        let speed = rock.current?.getAttribute("data-speed")

        if (speed){

          let x
          let y

          if (rock.current?.id === "ParallaxBg" || rock.current?.id === "RocksBg"){
            
            x = (ParallaxSceneRef.current?.offsetWidth - data.pageX * parseInt(speed)) / 100
            y = (data.pageY * parseInt(speed)) / 200

          } else {

            x = (ParallaxSceneRef.current?.offsetWidth - data.pageX * parseInt(speed)) / 100
            y = (ParallaxSceneRef.current?.offsetWidth - data.pageY * parseInt(speed)) / 100

          }


          anime({
            targets: `#${rock.current?.id}`,
            translateX: x,
            translateY: y,
            duration: 10,
            easing: "linear"
          })
        }
      }
    })
  }

  

  const Model = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/3DModels/ComputerModel/scene.gltf");

    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.1,0]}>
          <group scale={[0.01, 0.01, 0.01]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh1_paint_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh2_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh3_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh4_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh5_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh6_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh7_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh8_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh9_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh10_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh11_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh12_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh13_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh14_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh15_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh16_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh17_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh18_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh19_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh20_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh21_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh22_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh23_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh24_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh25_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh26_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh27_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh28_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh29_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh30_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh31_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh32_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh33_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh34_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh35_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh36_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh37_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh38_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh39_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh40_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh41_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh42_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh43_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh44_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh45_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh46_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh47_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh48_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh49_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh50_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh51_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh52_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh53_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh54_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh55_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh56_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEYBOARD_1_A}
                geometry={nodes.Mesh57_KEYBOARD_1_A_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh58_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh59_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh60_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh61_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh62_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh63_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh64_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh65_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh66_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh67_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh68_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh69_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh70_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1_1}
                geometry={nodes.Mesh70_KEY_DECAL1_1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1_2}
                geometry={nodes.Mesh70_KEY_DECAL1_2_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1_3}
                geometry={nodes.Mesh70_KEY_DECAL1_3_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1_4}
                geometry={nodes.Mesh70_KEY_DECAL1_4_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh71_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh72_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh73_paint_2_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh74_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh75_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh76_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh77_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh78_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh79_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh80_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh81_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh82_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh83_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh84_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh85_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh86_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh87_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh88_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh89_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh90_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh91_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh92_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh93_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh94_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1_5}
                geometry={nodes.Mesh94_KEY_DECAL1_5_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh95_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh96_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh97_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh98_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh99_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh100_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh101_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh102_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh103_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.KEY_DECAL1}
                geometry={nodes.Mesh104_KEY_DECAL1_0.geometry}
              />
              <mesh
                material={materials.material}
                geometry={nodes.Mesh105_cap_0.geometry}
              />
              <mesh
                material={materials.material}
                geometry={nodes.Mesh106_cap_0.geometry}
              />
              <mesh
                material={materials.material}
                geometry={nodes.Mesh107_cap_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh108_paint_0.geometry}
              />
              <mesh
                material={materials.caps_lock_1}
                geometry={nodes.Mesh109_caps_lock_1_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh110_paint_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh111_metal_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh112_paint_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh112_paint_2_0.geometry}
              />
              <mesh
                material={materials.material}
                geometry={nodes.Mesh113_cap_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh114_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh115_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh116_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh117_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh118_paint_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh119_metal_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh120_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh121_paint_0.geometry}
              />
              <mesh
                material={materials.lcd_decal}
                geometry={nodes.Mesh122_lcd_decal_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh123_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh123_paint_0.geometry}
              />
              <mesh
                material={materials.lcd_screen}
                geometry={nodes.Mesh123_lcd_screen_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh123_metal_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh124_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh125_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh125_paint_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh126_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh127_paint_2_0.geometry}
              />
              <mesh
                material={materials.material}
                geometry={nodes.Mesh128_cap_0.geometry}
              />
              <mesh
                material={materials.red_button}
                geometry={nodes.Mesh129_red_button_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh130_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh131_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh132_paint_2_0.geometry}
              />
              <mesh
                material={materials.material}
                geometry={nodes.Mesh133_cap_0.geometry}
              />
              <mesh
                material={materials.red_button}
                geometry={nodes.Mesh134_red_button_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh135_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh136_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh137_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh138_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh138_paint_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh139_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh140_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh141_paint_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh142_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh143_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh144_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh145_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh146_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh147_paint_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh148_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh149_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh150_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint_2}
                geometry={nodes.Mesh151_paint_2_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh152_paint_0.geometry}
              />
              <mesh
                material={materials.olivetti}
                geometry={nodes.Mesh153_olivetti_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh154_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh155_paint_0.geometry}
              />
              <mesh
                material={materials.black_plastic}
                geometry={nodes.Mesh155_black_plastic_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh156_paint_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh157_metal_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh158_metal_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh159_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh160_paint_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh161_metal_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh162_paint_0.geometry}
              />
              <mesh
                material={materials.black_plastic}
                geometry={nodes.Mesh162_black_plastic_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh163_paint_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh164_metal_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh165_metal_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh166_paint_0.geometry}
              />
              <mesh
                material={materials.paint}
                geometry={nodes.Mesh167_paint_0.geometry}
              />
              <mesh
                material={materials.metal}
                geometry={nodes.Mesh168_metal_0.geometry}
              />
              <mesh
                material={materials.black_plastic}
                geometry={nodes.Mesh169_black_plastic_0.geometry}
              />
              <mesh
                material={materials.red_button}
                geometry={nodes.Mesh170_red_button_0.geometry}
              />
              <mesh
                material={materials.black_plastic}
                geometry={nodes.Mesh171_black_plastic_0.geometry}
              />
              <mesh
                material={materials.red_button}
                geometry={nodes.Mesh171_red_button_0.geometry}
              />
              <mesh
                material={materials.metal_220}
                geometry={nodes.Mesh172_metal_220_0.geometry}
              />
              <mesh
                material={materials.metal_220}
                geometry={nodes.Mesh173_metal_220_0.geometry}
              />
              <mesh
                material={materials.black_plastic}
                geometry={nodes.Mesh174_black_plastic_0.geometry}
              />
              <mesh
                material={materials.metal_220}
                geometry={nodes.Mesh175_metal_220_0.geometry}
              />
              <mesh
                material={materials.olivetti}
                geometry={nodes.Mesh176_olivetti_0.geometry}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }

  useGLTF.preload("/3DModels/ComputerModel/scene.gltf");



  const CreatePageStyle = (StyleName:string, TitleToDisplay:string) => {

    let showWaves = {
      visibility:"hidden",
      position:"absolute"
    } as React.CSSProperties

    if (StyleName === "Animated") showWaves.visibility = "visible"

    let Page = (
      <div className="Page">
        <span className="StyleName">
          <div className="ArrowsBox">
            <div onClick={() => ChangePageTo("Left")} className="ArrowBoxLeft">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
              </svg>
            </div>

            <div
              onClick={() => ChangePageTo("Right")}
              className="ArrowBoxRight"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
              </svg>
            </div>
          </div>

          <h1 unselectable="on">{TitleToDisplay}</h1>

          <button
            onClick={() => {
              setData({ ...Data, PageStyle: StyleName });
              setTimeout(() => {
                props.changeFunction(
                  "NavBar Style",
                  2,
                  t("BuilderRoot.Builder.Step2.Title")
                );
                props.ScrollToSectionFunction("Instructions");
              }, 500);
            }}
          >
            {t("Choose.button")}
          </button>
        </span>

        <span className={`PageStyle ${StyleName}`}>
          <nav>
            <div className="LogoBox">
              <svg
                className="Logo"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.636 10.62l.79.439 1.25-.422v-.848c0-1.463-1.221-2.601-2.676-2.601-1.449 0-2.678 1.065-2.678 2.585v3.874c0 .351-.284.635-.635.635-.35 0-.635-.284-.635-.635v-1.642h-2.052v1.664c0 1.481 1.201 2.682 2.682 2.682 1.47 0 2.662-1.18 2.683-2.644v-3.826c0-.352.286-.636.636-.636s.636.284.636.636v.739zm3.311 1.385v1.719c0 .351-.285.635-.635.635-.351 0-.637-.284-.637-.635v-1.687l-1.25.424-.79-.441v1.672c.012 1.471 1.208 2.659 2.683 2.659 1.48 0 2.682-1.201 2.682-2.682v-1.664h-2.053z" />
              </svg>
              <h3>Tu Logo</h3>
            </div>

            <div className="BurgerBox">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>

          <svg
            className="Waves"
            style={showWaves}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fillOpacity="1"
              d="M0,320L26.7,304C53.3,288,107,256,160,245.3C213.3,235,267,245,320,261.3C373.3,277,427,299,480,309.3C533.3,320,587,320,640,282.7C693.3,245,747,171,800,122.7C853.3,75,907,53,960,69.3C1013.3,85,1067,139,1120,154.7C1173.3,171,1227,149,1280,128C1333.3,107,1387,85,1413,74.7L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
            ></path>
          </svg>

          <span className="LeftBox">
            <div className="ImageBox">
              <svg
                style={showWaves}
                width="602"
                height="630"
                viewBox="0 0 602 630"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="undraw_Process_re_gws7 1" clipPath="url(#clip0)">
                  <path
                    id="Vector"
                    d="M419.633 76.852L418.48 78.0627L497.566 153.357L498.719 152.147L419.633 76.852Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_2"
                    d="M498.845 143.982L497.175 144.083L497.679 152.309L489.437 152.21L489.419 153.882L499.457 154.001L498.845 143.982Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_3"
                    d="M427.781 76.326L427.763 77.998L419.522 77.899L420.026 86.125L418.355 86.226L417.745 76.206L427.781 76.326Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_4"
                    d="M458.6 124.297C463.677 124.297 467.792 120.182 467.792 115.105C467.792 110.028 463.677 105.912 458.6 105.912C453.522 105.912 449.407 110.028 449.407 115.105C449.407 120.182 453.522 124.297 458.6 124.297Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_5"
                    d="M183.638 76.8521L104.553 152.147L105.705 153.357L184.791 78.0628L183.638 76.8521Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_6"
                    d="M103.815 154.001L113.853 153.882L113.834 152.21L105.593 152.309L106.097 144.083L104.427 143.982L103.815 154.001Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_7"
                    d="M185.527 76.206L184.916 86.226L183.246 86.125L183.749 77.899L175.508 77.998L175.49 76.326L185.527 76.206Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_8"
                    d="M144.672 124.297C149.749 124.297 153.865 120.182 153.865 115.105C153.865 110.028 149.749 105.912 144.672 105.912C139.595 105.912 135.479 110.028 135.479 115.105C135.479 120.182 139.595 124.297 144.672 124.297Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_9"
                    d="M370.164 190.543H231.436C229.442 190.541 227.53 189.747 226.12 188.337C224.71 186.927 223.917 185.016 223.914 183.021V7.52142C223.917 5.52731 224.71 3.61554 226.12 2.20549C227.53 0.79544 229.442 0.00227088 231.436 0H370.164C372.158 0.00227088 374.07 0.79544 375.48 2.20549C376.89 3.61554 377.683 5.52731 377.686 7.52142V183.021C377.683 185.016 376.89 186.927 375.48 188.337C374.07 189.747 372.158 190.541 370.164 190.543ZM231.436 1.67143C229.885 1.67317 228.398 2.29007 227.301 3.38678C226.204 4.48349 225.587 5.97044 225.586 7.52142V183.021C225.587 184.572 226.204 186.059 227.301 187.156C228.398 188.253 229.885 188.87 231.436 188.871H370.164C371.715 188.87 373.202 188.253 374.299 187.156C375.396 186.059 376.013 184.572 376.014 183.021V7.52142C376.013 5.97044 375.396 4.48349 374.299 3.38678C373.202 2.29007 371.715 1.67317 370.164 1.67143H231.436Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Square Color 1"
                    d="M289.26 84.3584H258.723C257.726 84.3573 256.77 83.9607 256.065 83.2557C255.36 82.5507 254.963 81.5948 254.962 80.5977V44.562C254.963 43.5649 255.36 42.609 256.065 41.904C256.77 41.1989 257.726 40.8024 258.723 40.8013H289.26C290.257 40.8024 291.213 41.1989 291.918 41.904C292.623 42.609 293.019 43.5649 293.021 44.562V80.5977C293.019 81.5947 292.623 82.5507 291.918 83.2557C291.213 83.9607 290.257 84.3573 289.26 84.3584Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_10"
                    d="M348.596 101.073H318.059C317.061 101.072 316.106 100.675 315.401 99.97C314.696 99.265 314.299 98.3091 314.298 97.312V61.2763C314.299 60.2792 314.696 59.3233 315.401 58.6183C316.106 57.9133 317.061 57.5167 318.059 57.5156H348.596C349.593 57.5167 350.549 57.9133 351.254 58.6183C351.959 59.3233 352.355 60.2792 352.356 61.2763V97.312C352.355 98.3091 351.959 99.265 351.254 99.97C350.549 100.675 349.593 101.072 348.596 101.073V101.073Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="SquareColor2"
                    d="M300.96 152.051H270.423C269.426 152.05 268.47 151.654 267.765 150.949C267.06 150.244 266.663 149.288 266.662 148.291V112.255C266.663 111.258 267.06 110.302 267.765 109.597C268.47 108.892 269.426 108.495 270.423 108.494H300.96C301.957 108.495 302.913 108.892 303.618 109.597C304.323 110.302 304.719 111.258 304.721 112.255V148.291C304.719 149.288 304.323 150.244 303.618 150.949C302.913 151.654 301.957 152.05 300.96 152.051V152.051Z"
                    fill="#FF6584"
                  />
                  <path
                    id="Vector_11"
                    d="M594.079 371H455.35C453.356 370.998 451.444 370.205 450.034 368.794C448.624 367.384 447.831 365.473 447.829 363.479V187.979C447.831 185.984 448.624 184.073 450.034 182.663C451.444 181.253 453.356 180.459 455.35 180.457H594.079C596.073 180.459 597.984 181.253 599.395 182.663C600.805 184.073 601.598 185.984 601.6 187.979V363.479C601.598 365.473 600.805 367.384 599.395 368.795C597.984 370.205 596.073 370.998 594.079 371ZM455.35 182.129C453.799 182.13 452.312 182.747 451.215 183.844C450.119 184.941 449.502 186.428 449.5 187.979V363.479C449.502 365.03 450.119 366.517 451.215 367.613C452.312 368.71 453.799 369.327 455.35 369.329H594.079C595.63 369.327 597.116 368.71 598.213 367.613C599.31 366.517 599.927 365.03 599.929 363.479V187.979C599.927 186.428 599.31 184.941 598.213 183.844C597.116 182.747 595.63 182.13 594.079 182.129H455.35Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="SquareColor3"
                    d="M548.532 219.318H500.896C500.01 219.318 499.16 218.966 498.533 218.339C497.906 217.712 497.554 216.862 497.554 215.975C497.554 215.088 497.906 214.238 498.533 213.611C499.16 212.984 500.01 212.632 500.896 212.632H548.532C549.419 212.632 550.269 212.984 550.896 213.611C551.523 214.238 551.875 215.088 551.875 215.975C551.875 216.862 551.523 217.712 550.896 218.339C550.269 218.966 549.419 219.318 548.532 219.318Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_12"
                    d="M571.932 251.075H477.496C477.057 251.076 476.622 250.99 476.215 250.822C475.809 250.655 475.44 250.408 475.129 250.098C474.818 249.787 474.571 249.419 474.403 249.013C474.234 248.607 474.148 248.172 474.148 247.732C474.148 247.293 474.234 246.857 474.403 246.452C474.571 246.046 474.818 245.677 475.129 245.366C475.44 245.056 475.809 244.81 476.215 244.642C476.622 244.474 477.057 244.389 477.496 244.389H571.932C572.372 244.389 572.807 244.474 573.213 244.642C573.619 244.81 573.989 245.056 574.3 245.366C574.611 245.677 574.857 246.046 575.026 246.452C575.194 246.857 575.281 247.293 575.281 247.732C575.281 248.172 575.194 248.607 575.026 249.013C574.857 249.419 574.611 249.787 574.3 250.098C573.989 250.408 573.619 250.655 573.213 250.822C572.807 250.99 572.372 251.076 571.932 251.075V251.075Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_13"
                    d="M571.932 268.625H477.496C477.057 268.626 476.622 268.54 476.215 268.372C475.809 268.205 475.44 267.958 475.129 267.648C474.818 267.337 474.571 266.969 474.403 266.563C474.234 266.157 474.148 265.722 474.148 265.282C474.148 264.843 474.234 264.408 474.403 264.002C474.571 263.596 474.818 263.227 475.129 262.916C475.44 262.606 475.809 262.36 476.215 262.192C476.622 262.024 477.057 261.939 477.496 261.939H571.932C572.372 261.939 572.807 262.024 573.213 262.192C573.619 262.36 573.989 262.606 574.3 262.916C574.611 263.227 574.857 263.596 575.026 264.002C575.194 264.408 575.281 264.843 575.281 265.282C575.281 265.722 575.194 266.157 575.026 266.563C574.857 266.969 574.611 267.337 574.3 267.648C573.989 267.958 573.619 268.205 573.213 268.372C572.807 268.54 572.372 268.626 571.932 268.625V268.625Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_14"
                    d="M571.932 286.175H477.496C477.057 286.176 476.622 286.09 476.215 285.922C475.809 285.755 475.44 285.508 475.129 285.198C474.818 284.887 474.571 284.519 474.403 284.113C474.234 283.707 474.148 283.272 474.148 282.832C474.148 282.393 474.234 281.958 474.403 281.552C474.571 281.146 474.818 280.777 475.129 280.466C475.44 280.156 475.809 279.91 476.215 279.742C476.622 279.574 477.057 279.489 477.496 279.489H571.932C572.372 279.489 572.807 279.574 573.213 279.742C573.619 279.91 573.989 280.156 574.3 280.466C574.611 280.777 574.857 281.146 575.026 281.552C575.194 281.958 575.281 282.393 575.281 282.832C575.281 283.272 575.194 283.707 575.026 284.113C574.857 284.519 574.611 284.887 574.3 285.198C573.989 285.508 573.619 285.755 573.213 285.922C572.807 286.09 572.372 286.176 571.932 286.175V286.175Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_15"
                    d="M571.932 303.725H477.496C477.057 303.726 476.622 303.64 476.215 303.472C475.809 303.305 475.44 303.058 475.129 302.748C474.818 302.437 474.571 302.069 474.403 301.663C474.234 301.257 474.148 300.822 474.148 300.382C474.148 299.943 474.234 299.508 474.403 299.102C474.571 298.696 474.818 298.327 475.129 298.016C475.44 297.706 475.809 297.46 476.215 297.292C476.622 297.124 477.057 297.039 477.496 297.039H571.932C572.372 297.039 572.807 297.124 573.213 297.292C573.619 297.46 573.989 297.706 574.3 298.016C574.611 298.327 574.857 298.696 575.026 299.102C575.194 299.508 575.281 299.943 575.281 300.382C575.281 300.822 575.194 301.257 575.026 301.663C574.857 302.069 574.611 302.437 574.3 302.748C573.989 303.058 573.619 303.305 573.213 303.472C572.807 303.64 572.372 303.726 571.932 303.725V303.725Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_16"
                    d="M571.932 321.275H477.496C477.057 321.276 476.622 321.19 476.215 321.022C475.809 320.855 475.44 320.608 475.129 320.298C474.818 319.987 474.571 319.619 474.403 319.213C474.234 318.807 474.148 318.372 474.148 317.932C474.148 317.493 474.234 317.058 474.403 316.652C474.571 316.246 474.818 315.877 475.129 315.566C475.44 315.256 475.809 315.01 476.215 314.842C476.622 314.674 477.057 314.589 477.496 314.589H571.932C572.372 314.589 572.807 314.674 573.213 314.842C573.619 315.01 573.989 315.256 574.3 315.566C574.611 315.877 574.857 316.246 575.026 316.652C575.194 317.058 575.281 317.493 575.281 317.932C575.281 318.372 575.194 318.807 575.026 319.213C574.857 319.619 574.611 319.987 574.3 320.298C573.989 320.608 573.619 320.855 573.213 321.022C572.807 321.19 572.372 321.276 571.932 321.275V321.275Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_17"
                    d="M571.932 338.825H477.496C477.057 338.826 476.622 338.74 476.215 338.572C475.809 338.405 475.44 338.158 475.129 337.848C474.818 337.537 474.571 337.169 474.403 336.763C474.234 336.357 474.148 335.922 474.148 335.482C474.148 335.043 474.234 334.607 474.403 334.202C474.571 333.796 474.818 333.427 475.129 333.116C475.44 332.806 475.809 332.56 476.215 332.392C476.622 332.224 477.057 332.139 477.496 332.139H571.932C572.372 332.139 572.807 332.224 573.213 332.392C573.619 332.56 573.989 332.806 574.3 333.116C574.611 333.427 574.857 333.796 575.026 334.202C575.194 334.607 575.281 335.043 575.281 335.482C575.281 335.922 575.194 336.357 575.026 336.763C574.857 337.169 574.611 337.537 574.3 337.848C573.989 338.158 573.619 338.405 573.213 338.572C572.807 338.74 572.372 338.826 571.932 338.825V338.825Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_18"
                    d="M146.25 371H7.52142C5.52731 370.998 3.61553 370.205 2.20547 368.795C0.795424 367.384 0.00226824 365.473 0 363.479V187.979C0.00226824 185.984 0.795424 184.073 2.20547 182.663C3.61553 181.253 5.52731 180.459 7.52142 180.457H146.25C148.244 180.459 150.156 181.253 151.566 182.663C152.976 184.073 153.769 185.984 153.771 187.979V363.479C153.769 365.473 152.976 367.384 151.566 368.794C150.156 370.205 148.244 370.998 146.25 371ZM7.52142 182.129C5.97044 182.13 4.48349 182.747 3.38678 183.844C2.29007 184.941 1.67316 186.428 1.67142 187.979V363.479C1.67316 365.03 2.29007 366.517 3.38678 367.613C4.48349 368.71 5.97044 369.327 7.52142 369.329H146.25C147.801 369.327 149.288 368.71 150.385 367.613C151.481 366.517 152.098 365.03 152.1 363.479V187.979C152.098 186.428 151.481 184.941 150.385 183.844C149.288 182.747 147.801 182.13 146.25 182.129H7.52142Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_19"
                    d="M124.248 221.893H82.4626C81.576 221.893 80.7258 221.541 80.0988 220.914C79.4719 220.287 79.1198 219.436 79.1198 218.55C79.1198 217.663 79.4719 216.813 80.0988 216.186C80.7258 215.559 81.576 215.207 82.4626 215.207H124.248C125.135 215.207 125.985 215.559 126.612 216.186C127.239 216.813 127.591 217.663 127.591 218.55C127.591 219.436 127.239 220.287 126.612 220.914C125.985 221.541 125.135 221.893 124.248 221.893V221.893Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_20"
                    d="M124.248 239.443H82.4626C81.576 239.443 80.7258 239.091 80.0988 238.464C79.4719 237.837 79.1198 236.986 79.1198 236.1C79.1198 235.213 79.4719 234.363 80.0988 233.736C80.7258 233.109 81.576 232.757 82.4626 232.757H124.248C125.135 232.757 125.985 233.109 126.612 233.736C127.239 234.363 127.591 235.213 127.591 236.1C127.591 236.986 127.239 237.837 126.612 238.464C125.985 239.091 125.135 239.443 124.248 239.443V239.443Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="SquareColor1"
                    d="M61.0222 249.436H30.4852C29.4882 249.435 28.5322 249.038 27.8272 248.333C27.1222 247.628 26.7256 246.672 26.7245 245.675V209.639C26.7256 208.642 27.1222 207.686 27.8272 206.981C28.5322 206.276 29.4882 205.88 30.4852 205.879H61.0222C62.0193 205.88 62.9752 206.276 63.6802 206.981C64.3853 207.686 64.7818 208.642 64.7829 209.639V245.675C64.7818 246.672 64.3853 247.628 63.6802 248.333C62.9752 249.038 62.0193 249.435 61.0222 249.436V249.436Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Line2"
                    d="M123.959 275.378H29.5231C29.0836 275.379 28.6483 275.293 28.242 275.126C27.8358 274.958 27.4666 274.712 27.1556 274.401C26.8446 274.091 26.5978 273.722 26.4294 273.316C26.2611 272.91 26.1744 272.475 26.1744 272.036C26.1744 271.596 26.2611 271.161 26.4294 270.755C26.5978 270.349 26.8446 269.98 27.1556 269.67C27.4666 269.359 27.8358 269.113 28.242 268.946C28.6483 268.778 29.0836 268.692 29.5231 268.693H123.959C124.398 268.692 124.834 268.778 125.24 268.946C125.646 269.113 126.015 269.359 126.326 269.67C126.637 269.98 126.884 270.349 127.052 270.755C127.221 271.161 127.307 271.596 127.307 272.036C127.307 272.475 127.221 272.91 127.052 273.316C126.884 273.722 126.637 274.091 126.326 274.401C126.015 274.712 125.646 274.958 125.24 275.126C124.834 275.293 124.398 275.379 123.959 275.378Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_22"
                    d="M123.959 292.928H29.5231C29.0836 292.929 28.6483 292.843 28.242 292.676C27.8358 292.508 27.4666 292.262 27.1556 291.951C26.8446 291.641 26.5978 291.272 26.4294 290.866C26.2611 290.46 26.1744 290.025 26.1744 289.586C26.1744 289.146 26.2611 288.711 26.4294 288.305C26.5978 287.899 26.8446 287.53 27.1556 287.22C27.4666 286.909 27.8358 286.663 28.242 286.496C28.6483 286.328 29.0836 286.242 29.5231 286.243H123.959C124.398 286.242 124.834 286.328 125.24 286.496C125.646 286.663 126.015 286.909 126.326 287.22C126.637 287.53 126.884 287.899 127.052 288.305C127.221 288.711 127.307 289.146 127.307 289.586C127.307 290.025 127.221 290.46 127.052 290.866C126.884 291.272 126.637 291.641 126.326 291.951C126.015 292.262 125.646 292.508 125.24 292.676C124.834 292.843 124.398 292.929 123.959 292.928V292.928Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_23"
                    d="M123.959 310.478H29.5231C29.0836 310.479 28.6483 310.393 28.242 310.226C27.8358 310.058 27.4666 309.812 27.1556 309.501C26.8446 309.191 26.5978 308.822 26.4294 308.416C26.2611 308.01 26.1744 307.575 26.1744 307.136C26.1744 306.696 26.2611 306.261 26.4294 305.855C26.5978 305.449 26.8446 305.08 27.1556 304.77C27.4666 304.459 27.8358 304.213 28.242 304.046C28.6483 303.878 29.0836 303.792 29.5231 303.793H123.959C124.398 303.792 124.834 303.878 125.24 304.046C125.646 304.213 126.015 304.459 126.326 304.77C126.637 305.08 126.884 305.449 127.052 305.855C127.221 306.261 127.307 306.696 127.307 307.136C127.307 307.575 127.221 308.01 127.052 308.416C126.884 308.822 126.637 309.191 126.326 309.501C126.015 309.812 125.646 310.058 125.24 310.226C124.834 310.393 124.398 310.479 123.959 310.478V310.478Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Line1"
                    d="M123.959 328.028H29.5231C29.0836 328.029 28.6483 327.943 28.242 327.776C27.8358 327.608 27.4666 327.362 27.1556 327.051C26.8446 326.741 26.5978 326.372 26.4294 325.966C26.2611 325.56 26.1744 325.125 26.1744 324.686C26.1744 324.246 26.2611 323.811 26.4294 323.405C26.5978 322.999 26.8446 322.63 27.1556 322.32C27.4666 322.009 27.8358 321.763 28.242 321.596C28.6483 321.428 29.0836 321.342 29.5231 321.343H123.959C124.398 321.342 124.834 321.428 125.24 321.596C125.646 321.763 126.015 322.009 126.326 322.32C126.637 322.63 126.884 322.999 127.052 323.405C127.221 323.811 127.307 324.246 127.307 324.686C127.307 325.125 127.221 325.56 127.052 325.966C126.884 326.372 126.637 326.741 126.326 327.051C126.015 327.362 125.646 327.608 125.24 327.776C124.834 327.943 124.398 328.029 123.959 328.028V328.028Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_25"
                    d="M123.959 345.578H29.5231C29.0836 345.579 28.6483 345.493 28.242 345.326C27.8358 345.158 27.4666 344.912 27.1556 344.601C26.8446 344.291 26.5978 343.922 26.4294 343.516C26.2611 343.11 26.1744 342.675 26.1744 342.236C26.1744 341.796 26.2611 341.361 26.4294 340.955C26.5978 340.549 26.8446 340.18 27.1556 339.87C27.4666 339.559 27.8358 339.313 28.242 339.146C28.6483 338.978 29.0836 338.892 29.5231 338.893H123.959C124.398 338.892 124.834 338.978 125.24 339.146C125.646 339.313 126.015 339.559 126.326 339.87C126.637 340.18 126.884 340.549 127.052 340.955C127.221 341.361 127.307 341.796 127.307 342.236C127.307 342.675 127.221 343.11 127.052 343.516C126.884 343.922 126.637 344.291 126.326 344.601C126.015 344.912 125.646 345.158 125.24 345.326C124.834 345.493 124.398 345.579 123.959 345.578V345.578Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_26"
                    d="M198.695 472.719V436.683C198.696 435.686 199.093 434.73 199.798 434.025C200.503 433.32 201.459 432.923 202.456 432.922H232.993C233.99 432.923 234.946 433.32 235.651 434.025C236.356 434.73 236.753 435.686 236.754 436.683V472.719C236.753 473.716 236.356 474.672 235.651 475.377C234.946 476.082 233.99 476.478 232.993 476.479H202.456C201.459 476.478 200.503 476.082 199.798 475.377C199.093 474.672 198.696 473.716 198.695 472.719V472.719Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="SquareColor1_2"
                    d="M209.695 460.719V424.683C209.696 423.686 210.093 422.73 210.798 422.025C211.503 421.32 212.459 420.923 213.456 420.922H243.993C244.99 420.923 245.946 421.32 246.651 422.025C247.356 422.73 247.753 423.686 247.754 424.683V460.719C247.753 461.716 247.356 462.672 246.651 463.377C245.946 464.082 244.99 464.478 243.993 464.479H213.456C212.459 464.478 211.503 464.082 210.798 463.377C210.093 462.672 209.696 461.716 209.695 460.719V460.719Z"
                    fill="#6C63FF"
                  />
                  <path
                    id="Vector_27"
                    d="M346.584 449.188C345.435 448.524 344.446 447.617 343.685 446.529C342.925 445.441 342.413 444.2 342.184 442.893C341.955 441.585 342.016 440.244 342.362 438.963C342.708 437.681 343.331 436.492 344.186 435.477L334.72 366.289L354.438 367.257L357.534 434.742C359.143 436.293 360.128 438.379 360.301 440.607C360.475 442.834 359.825 445.048 358.476 446.829C357.126 448.61 355.17 449.833 352.978 450.268C350.787 450.703 348.512 450.319 346.584 449.188V449.188Z"
                    fill="#A0616A"
                  />
                  <path
                    id="ShirtShoulderRight"
                    d="M357.144 368.179C356.74 368.655 356.222 369.021 355.639 369.243L337.919 376.006C337.029 376.346 336.043 376.331 335.163 375.966C334.284 375.601 333.578 374.912 333.19 374.041L317.494 338.766C315.987 335.494 315.73 331.783 316.773 328.335C317.544 325.874 318.964 323.666 320.884 321.944C322.805 320.223 325.154 319.051 327.684 318.553C329.631 318.152 331.641 318.181 333.574 318.636C335.892 319.152 338.044 320.239 339.836 321.796C341.628 323.354 343.003 325.334 343.838 327.557L357.794 364.447C358.028 365.071 358.092 365.745 357.978 366.402C357.863 367.058 357.576 367.671 357.144 368.179Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_28"
                    d="M264.807 618.06H252.547L248.102 570.549L264.809 570.773L264.807 618.06Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Vector_29"
                    d="M243.79 614.557H267.434V629.444H228.903C228.903 627.489 229.288 625.553 230.037 623.747C230.785 621.94 231.881 620.299 233.264 618.917C234.646 617.535 236.287 616.438 238.093 615.69C239.899 614.942 241.835 614.557 243.79 614.557V614.557Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_30"
                    d="M321.807 618.06H309.547L303.715 570.772L321.809 570.773L321.807 618.06Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Vector_31"
                    d="M300.79 614.557H324.434V629.444H285.903C285.903 627.489 286.288 625.553 287.037 623.747C287.785 621.94 288.881 620.299 290.264 618.917C291.646 617.535 293.287 616.438 295.093 615.69C296.899 614.942 298.835 614.557 300.79 614.557V614.557Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Pants"
                    d="M323.349 601.236L304.094 599.81C302.999 599.727 301.972 599.248 301.205 598.462C300.439 597.675 299.986 596.636 299.931 595.539L295.638 506.809C295.597 505.957 295.246 505.15 294.652 504.539C294.058 503.927 293.261 503.554 292.411 503.488C291.561 503.423 290.716 503.67 290.035 504.183C289.354 504.696 288.884 505.44 288.713 506.276L270.802 593.683C270.58 594.758 269.974 595.716 269.096 596.375C268.218 597.035 267.13 597.351 266.035 597.265L248.629 595.872C248.033 595.825 247.452 595.658 246.92 595.383C246.389 595.108 245.917 594.73 245.534 594.271C245.15 593.812 244.862 593.28 244.686 592.708C244.511 592.136 244.451 591.535 244.51 590.94L260.658 429.463C260.721 428.832 260.917 428.221 261.233 427.671C261.548 427.121 261.977 426.644 262.49 426.271C263.003 425.898 263.589 425.638 264.21 425.507C264.831 425.377 265.472 425.379 266.092 425.514L327.498 438.862C328.515 439.086 329.423 439.654 330.069 440.471C330.715 441.288 331.058 442.303 331.041 443.344L328.181 596.832C328.158 598.009 327.676 599.13 326.837 599.956C325.998 600.781 324.869 601.245 323.692 601.248C323.578 601.248 323.464 601.243 323.349 601.236Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Head"
                    d="M306.503 294.449C320.068 294.449 331.064 283.452 331.064 269.888C331.064 256.323 320.068 245.327 306.503 245.327C292.939 245.327 281.942 256.323 281.942 269.888C281.942 283.452 292.939 294.449 306.503 294.449Z"
                    fill="#A0616A"
                  />
                  <path
                    id="Shirt"
                    d="M268.396 441.915C266.034 439.797 264.159 437.193 262.9 434.282C261.641 431.37 261.027 428.22 261.102 425.049C261.102 389.748 291.657 310.881 292.615 308.42C292.709 307.827 293.515 307.571 297.745 304.714C301.977 301.855 308.08 301.415 315.884 303.408C316.678 303.612 317.4 304.028 317.973 304.613C318.546 305.198 318.948 305.929 319.134 306.727L320.586 308.824C320.712 309.356 320.962 309.851 321.314 310.269C321.666 310.687 322.112 311.016 322.615 311.231C328.908 313.882 348.913 326.109 342.096 372.122C335.764 414.865 333.195 440.003 332.384 448.827C332.288 449.874 331.829 450.855 331.085 451.598C330.341 452.34 329.359 452.799 328.312 452.893C325.227 453.169 319.93 453.536 313.623 453.536C299.002 453.536 278.947 451.564 268.396 441.915Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_33"
                    d="M239.047 428.837C238.463 427.646 238.147 426.34 238.122 425.014C238.097 423.687 238.363 422.37 238.902 421.158C239.44 419.945 240.238 418.865 241.239 417.993C242.241 417.122 243.421 416.481 244.696 416.115L275.389 353.39L291.223 365.181L256.189 422.943C256.661 425.127 256.316 427.408 255.219 429.355C254.122 431.301 252.349 432.777 250.236 433.504C248.123 434.231 245.817 434.157 243.755 433.297C241.693 432.437 240.018 430.85 239.047 428.837L239.047 428.837Z"
                    fill="#A0616A"
                  />
                  <path
                    id="ShirtShoulderLeft"
                    d="M292.956 367.454C292.356 367.624 291.722 367.64 291.113 367.499L272.631 363.241C271.703 363.027 270.892 362.466 270.365 361.672C269.838 360.878 269.636 359.913 269.799 358.975L276.422 320.937C276.994 317.38 278.848 314.156 281.635 311.873C283.647 310.259 286.057 309.217 288.611 308.858C291.164 308.498 293.768 308.835 296.147 309.831C297.986 310.583 299.639 311.726 300.991 313.182C302.628 314.902 303.81 317.003 304.43 319.296C305.05 321.588 305.088 323.998 304.542 326.309L295.575 364.717C295.422 365.366 295.099 365.962 294.639 366.443C294.178 366.924 293.597 367.273 292.956 367.454Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Hair"
                    d="M300.753 292.079C299.558 290.859 298.675 289.369 298.181 287.734C297.686 286.1 297.595 284.37 297.914 282.692C298.77 278.213 299.273 275.282 299.368 274.216C299.695 270.568 296.007 267.615 292.358 267.145C292.217 267.127 292.099 267.114 292 267.106C292.093 267.198 292.193 267.291 292.28 267.373C292.973 268.024 293.836 268.835 293.631 269.671C293.507 270.174 293.047 270.532 292.224 270.762C286.518 272.359 282.123 270.893 278.394 266.146C277.345 264.797 276.624 263.223 276.288 261.548C274.952 254.993 278.512 249.405 281.734 245.872C284.391 242.959 288.698 239.423 294.128 239.12C298.352 238.884 303.374 241.315 304.877 245.694C305.586 244.644 306.53 243.772 307.634 243.15C308.738 242.527 309.973 242.171 311.239 242.108C314.122 242.046 316.96 242.835 319.397 244.377C331.306 251.199 336.424 267.45 330.574 279.865C326.893 287.674 318.919 293.488 309.764 295.037C309.191 295.134 308.61 295.183 308.029 295.184C306.67 295.182 305.325 294.906 304.075 294.372C302.825 293.839 301.695 293.059 300.753 292.079V292.079Z"
                    fill="#2F2E41"
                  />
                  <path
                    id="Vector_35"
                    d="M185.579 630H380.579C380.844 630 381.098 629.895 381.286 629.707C381.473 629.52 381.579 629.265 381.579 629C381.579 628.735 381.473 628.48 381.286 628.293C381.098 628.105 380.844 628 380.579 628H185.579C185.314 628 185.059 628.105 184.872 628.293C184.684 628.48 184.579 628.735 184.579 629C184.579 629.265 184.684 629.52 184.872 629.707C185.059 629.895 185.314 630 185.579 630V630Z"
                    fill="#3F3D56"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="601.6" height="630" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="BoxesBox">
                <span className="ActBox1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
                  </svg>
                </span>
                <span className="ActBox2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 9v-7h6c1.695 1.942 2.371 3 4 3h12v4h-22zm-1 2l2 11h20l2-11h-24z" />
                  </svg>
                </span>
              </div>

              <span className="Foto">
                <img alt="coso" src={DudFoto}></img>
              </span>

              <div className="MinGrid">
                {/*1*/}
                <span className="GridBox" />
                {/*2*/}
                <span className="GridBox" />
                {/*3*/}
                <span className="GridBox" />
                {/*4*/}
                <span className="GridBox" />
                {/*5*/}
                <span className="GridBox" />
                {/*6*/}
                <span className="GridBox" />
                {/*7*/}
                <span className="GridBox" />
                {/*8*/}
                <span className="GridBox" />
                {/*9*/}
                <span className="GridBox" />
                {/*10*/}
                <span className="GridBox" />
                {/*11*/}
                <span className="GridBox" />
                {/*12*/}
                <span className="GridBox" />
                {/*13*/}
                <span className="GridBox" />
                {/*14*/}
                <span className="GridBox" />
                {/*15*/}
                <span className="GridBox" />
                {/*16*/}
                <span className="GridBox" />
                {/*17*/}
                <span className="GridBox" />
                {/*18*/}
                <span className="GridBox" />
                {/*19*/}
                <span className="GridBox" />
                {/*20*/}
                <span className="GridBox" />
                {/*21*/}
                <span className="GridBox" />
                {/*22*/}
                <span className="GridBox" />
                {/*23*/}
                <span className="GridBox" />
                {/*24*/}
                <span className="GridBox" />
                {/*25*/}
                <span className="GridBox" />
                {/*26*/}
                <span className="GridBox" />
                {/*27*/}
                <span className="GridBox" />
                {/*28*/}
                <span className="GridBox" />
                {/*29*/}
                <span className="GridBox" />
                {/*30*/}
                <span className="GridBox" />
                {/*31*/}
                <span className="GridBox" />
                {/*32*/}
                <span className="GridBox" />
                {/*33*/}
                <span className="GridBox" />
                {/*34*/}
                <span className="GridBox" />
                {/*35*/}
                <span className="GridBox" />
                {/*36*/}
                <span className="GridBox" />
                {/*37*/}
                <span className="GridBox" />
                {/*38*/}
                <span className="GridBox" />
                {/*39*/}
                <span className="GridBox" />
                {/*41*/}
                <span className="GridBox" />
                {/*42*/}
                <span className="GridBox" />
                {/*43*/}
                <span className="GridBox" />
                {/*44*/}
                <span className="GridBox" />
                {/*45*/}
                <span className="GridBox" />
                {/*46*/}
                <span className="GridBox" />
                {/*47*/}
                <span className="GridBox" />
                {/*48*/}
                <span className="GridBox" />
                {/*49*/}
                <span className="GridBox" />
                {/*50*/}
                <span className="GridBox" />
                {/*51*/}
                <span className="GridBox" />
                {/*52*/}
                <span className="GridBox" />
                {/*53*/}
                <span className="GridBox" />
                {/*54*/}
                <span className="GridBox" />
                {/*55*/}
                <span className="GridBox" />
                {/*56*/}
                <span className="GridBox" />
                {/*57*/}
                <span className="GridBox" />
                {/*58*/}
                <span className="GridBox" />
                {/*59*/}
                <span className="GridBox" />
                {/*60*/}
                <span className="GridBox" />
                {/*61*/}
                <span className="GridBox" />
              </div>

              <h2 className="TechChip2">Tu Título</h2>

              <svg
                className="TechChip"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M12.297 5.574l-.005-.005s1.703-1.754 2.388-2.259c1.181-.871 2.743-.339 2.743-.339s.021 1.465-.936 2.06c-.913.568-1.788.333-1.882.307.355-.5.853-1.165 1.521-1.498-.493-.028-1.09.246-1.557.681-.38.353-1.26 1.257-1.57 1.576v3.1c1.068-.86 3.035-2.439 3.603-2.877 1.568-1.212 3.691-.522 3.691-.522s.028 1.963-1.254 2.76c-1.223.76-2.753.298-2.878.263.605-.668 1.563-1.277 2.457-1.722-.898-.122-1.614.157-2.749 1.06-.789.629-2.491 2.013-2.87 2.321v3.201c1.229-.929 3.753-2.811 4.9-3.452 2.85-1.593 5.101-.284 5.101-.284s-.263 2.57-2.061 3.417c-1.714.808-3.837-.076-3.996-.14.893-.782 2.197-1.467 3.585-1.816-1.316-.209-2.626-.195-4.415 1.213-.95.747-2.665 1.997-3.114 2.323l.001 9.08h-2l-.001-9.08c-.45-.328-2.162-1.576-3.112-2.323-1.789-1.408-3.099-1.422-4.415-1.213 1.388.349 2.692 1.034 3.585 1.816-.159.064-2.282.948-3.996.14-1.798-.847-2.061-3.417-2.061-3.417s2.251-1.309 5.101.284c1.146.641 3.67 2.521 4.898 3.452v-3.198c-.37-.301-2.081-1.693-2.874-2.324-1.135-.903-1.851-1.182-2.749-1.06.895.445 1.853 1.054 2.457 1.722-.125.035-1.655.497-2.877-.263-1.282-.797-1.254-2.76-1.254-2.76s2.122-.69 3.691.522c.568.439 2.539 2.021 3.606 2.88v-3.105c-.311-.321-1.189-1.222-1.568-1.574-.467-.435-1.064-.709-1.557-.681.668.333 1.166.998 1.521 1.498-.094.026-.969.261-1.882-.307-.957-.595-.936-2.06-.936-2.06s1.562-.532 2.743.339c.685.505 2.388 2.259 2.388 2.259l-.006.007.297.276.298-.278zm2.895 9.386c.389-.138 2.022-.636 3.583.12 1.788.866 2.037 3.461 2.037 3.461s-2.178 1.42-3.978.549c-1.717-.831-2.297-2.637-2.347-2.801 1.177.203 2.363.618 3.494 1.305-.847-1.062-1.783-1.926-2.789-2.634zm-6.384 0c-.389-.138-2.022-.636-3.583.12-1.788.866-2.037 3.461-2.037 3.461s2.178 1.42 3.978.549c1.717-.831 2.297-2.637 2.347-2.801-1.177.203-2.363.618-3.494 1.305.847-1.062 1.783-1.926 2.789-2.634zm3.664-10.973c.175-.175.866-.929.861-1.969-.005-1.19-1.344-1.996-1.344-1.996s-1.332.811-1.326 2.009c.006 1.143.832 1.924.908 1.993.194-.689.276-1.437.198-2.227.355.734.58 1.463.703 2.19z" />
              </svg>
            </div>

            <div className="ContactsBox">
              <span>
                <svg
                  className="Insta"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                </svg>
              </span>
              <span>
                <svg
                  className="Face"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </span>
              <span>
                <svg
                  className="Whats"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                </svg>
              </span>
              <span>
                <svg
                  className="Twit"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </span>
            </div>

            <div className="D3Box">
              <Canvas
                // colorManagement
                // shadowMap
                camera={{ position: [-0.5, 0.5, 0.5], fov: 50 }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[300, 500, 0]} intensity={2} />
                <directionalLight
                  castShadow
                  position={[300, 500, 0]}
                  shadow-camera-far={50}
                />
                {/* <OrbitControls /> */}
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
              </Canvas>
            </div>
          </span>

          <span className="RightBox">
            <div
              className="ParallaxScene"
              onMouseMove={(e: any) => ParallaxAnimation(e)}
              ref={ParallaxSceneRef}
              id="ParallaxScene"
            >
              <img
                id="ParallaxBg"
                src={ParallaxBg}
                alt="Parallax Bg"
                data-speed={12}
                ref={ParallaxBgRef}
              />

              <img
                id="RocksBg"
                src={RocksBg}
                alt="Rocks Bg"
                data-speed={12}
                ref={RocksBgRef}
              />

              <div className="rock" id="Moon" ref={MoonRef} data-speed={1}>
                <img src={Moon} alt="Moon" />
              </div>

              <div className="RocksBg">
                <div ref={Rock1Ref} className="rock" id="Rock1" data-speed={7}>
                  <img src={Rock1} alt="Rock1" />
                </div>
                <div ref={Rock2Ref} className="rock" id="Rock2" data-speed={-5}>
                  <img src={Rock2} alt="Rock2" />
                </div>
                <div ref={Rock3Ref} className="rock" id="Rock3" data-speed={6}>
                  <img src={Rock3} alt="Rock3" />
                </div>
              </div>
            </div>

            <div className="TextBox">
              <h1>{t("BuilderRoot.Builder.StyleTitle")}</h1>
              <p>
                Lorep ipsum dolor sit amet Lorep ipsum dolor sit amet Lorep
                ipsum dolor sit amet Lorep ipsum dolor sit amet{" "}
              </p>
            </div>

            <button>Botón</button>

            <Particles
              id="tsparticles"
              options={{
                background: {
                  color: {
                    value: props.color2,
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: {
                      enable: false,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: props.color1,
                  },
                  links: {
                    color:
                      StyleName === "Glassmorphic"
                        ? props.color2
                        : props.color1,
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
          </span>
        </span>
      </div>
    );

    PagesList.push(Page)
  }


  // Use Effects (for Animations)

  useEffect(() => {

    const GridAnimation = () => {
      
      const tl = anime.timeline({
        duration: 500,
        easing:"easeInOutSine",
        loop:true
      })

      tl.add({
        targets: ".GridBox",
        scale: [
          {
            value: 0,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 1, easing: "easeInOutSine", duration: 1000 },
        ],

        opacity: [
          {
            value: 0.25,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 0.5, easing: "easeInOutSine", duration: 1000 },
        ],

        delay: anime.stagger(100, { grid: [10, 6], from: "last" }),
      });

      tl.add({
        targets: ".GridBox",
        scale: [
          {
            value: 0,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 1, easing: "easeInOutSine", duration: 1000 },
        ],

        opacity: [
          {
            value: 0.5,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 0.25, easing: "easeInOutSine", duration: 1000 },
        ],

        delay: anime.stagger(100, { grid: [10, 6], from: "first"}),
      });

      tl.add({
        targets: ".GridBox",
        scale: [
          {
            value: 0,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 1, easing: "easeInOutSine", duration: 1000 },
        ],

        opacity: [
          {
            value: 0.25,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 0.5, easing: "easeInOutSine", duration: 1000 },
        ],

        delay: anime.stagger(100, { grid: [10, 6], from: "center"}),
      });

      tl.add({
        targets: ".GridBox",
        scale: [
          {
            value: 0,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 1, easing: "easeInOutSine", duration: 1000 },
        ],

        opacity: [
          {
            value: 0.5,
            easing: "easeInOutSine",
            duration: 1000,
            // delay: anime.stagger(300, {grid: [9,9], from:"first"})
          },

          { value: 0.25, easing: "easeInOutSine", duration: 1000 },
        ],

        delay: anime.stagger(100, { grid: [10, 6], from: "center"}),
      });
    }

    GridAnimation()

  }, [])


// PageStyles Created

CreatePageStyle("D3-Style", t("BuilderRoot.Builder.Style.3D"))
CreatePageStyle("Minimalist", t("BuilderRoot.Builder.Style.Minimalist"))
CreatePageStyle("Parallax", t("BuilderRoot.Builder.Style.Parallax"));
CreatePageStyle("Glassmorphic", t("BuilderRoot.Builder.Style.Glassmorphic"))
CreatePageStyle("Animated", t("BuilderRoot.Builder.Style.Animated"))
CreatePageStyle("Neumorphic", t("BuilderRoot.Builder.Style.Neumorphic"));


  return (
    <div className="PageStylesSection">
      
      <div className="MainSection">
        {DisplayPageNumber(PageNumbertoDisplay)}
      </div>

    </div>
  );
};

export default ChooseStyle;
