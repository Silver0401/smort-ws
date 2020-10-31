import React from "react";
import Rosa from "react-on-scroll-animation";


const Block1 = () => {


    return(
        <section className="Block1">

            <Rosa animation="fade-down" duration={1000} className="Phrase">
                <h1>Invierte en tí, invierte en tu futuro. Invierte Smortly.</h1>
            </Rosa>

            <span className="WhyBox">
                <div className="Title">
                    <h1>¿Por qué Smort y no otros Softwares de Páginas Web?</h1>
                </div>
                <Rosa animation="fade-left" duration={1000} className="Reasons">
                    <div className="Box1">
                        <h2>Precios Increibles</h2>
                        <p>Los precios más bajos del mercado.</p>
                        <span className="SvgBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm.5 8.474v.526h-.5v-.499c-.518-.009-1.053-.132-1.5-.363l.228-.822c.478.186 1.114.383 1.612.27.574-.13.692-.721.057-1.005-.465-.217-1.889-.402-1.889-1.622 0-.681.52-1.292 1.492-1.425v-.534h.5v.509c.362.01.768.073 1.221.21l-.181.824c-.384-.135-.808-.257-1.222-.232-.744.043-.81.688-.29.958.856.402 1.972.7 1.972 1.773.001.858-.672 1.315-1.5 1.432zm1.624-10.179c1.132-.223 2.162-.626 2.876-1.197v.652c0 .499-.386.955-1.007 1.328-.581-.337-1.208-.6-1.869-.783zm-2.124-5.795c2.673 0 5-1.007 5-2.25s-2.327-2.25-5-2.25c-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.334-.537.958-.593v-.223h.321v.211c.234.005.494.03.784.09l-.116.342c-.221-.051-.467-.099-.708-.099l-.072.001c-.482.02-.521.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208c-.328-.003-.676-.056-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.369-.053.443-.3.035-.418zm-11.093 13.009c1.445 0 2.775-.301 3.705-.768.311-.69.714-1.329 1.198-1.899-.451-1.043-2.539-1.833-4.903-1.833-2.672 0-5 1.007-5 2.25s2.328 2.25 5 2.25zm.093-2.009c-.299-.09-1.214-.166-1.214-.675 0-.284.335-.537.958-.593v-.223h.321v.211c.234.005.494.03.784.09l-.117.342c-.22-.051-.466-.099-.707-.099l-.072.001c-.482.02-.52.287-.188.399.547.169 1.267.292 1.267.74 0 .357-.434.548-.967.596v.22h-.321v-.208c-.329-.003-.676-.056-.962-.152l.147-.343c.244.063.552.126.828.126l.208-.014c.368-.053.443-.3.035-.418zm4.003 8.531c-.919.59-2.44.978-4.096.978-2.672 0-5-1.007-5-2.25v-.652c1.146.918 3.109 1.402 5 1.402 1.236 0 2.499-.211 3.549-.611.153.394.336.773.547 1.133zm-9.096-3.772v-.651c1.146.917 3.109 1.401 5 1.401 1.039 0 2.094-.151 3.028-.435.033.469.107.926.218 1.37-.888.347-2.024.565-3.246.565-2.672 0-5-1.007-5-2.25zm0-2.5v-.652c1.146.918 3.109 1.402 5 1.402 1.127 0 2.275-.176 3.266-.509-.128.493-.21 1.002-.241 1.526-.854.298-1.903.483-3.025.483-2.672 0-5-1.007-5-2.25zm11-11v-.652c1.146.918 3.109 1.402 5 1.402 1.892 0 3.854-.484 5-1.402v.652c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25zm0 5v-.652c.713.571 1.744.974 2.876 1.197-.661.183-1.287.446-1.868.783-.622-.373-1.008-.829-1.008-1.328zm0-2.5v-.651c1.146.917 3.109 1.401 5 1.401 1.892 0 3.854-.484 5-1.401v.651c0 1.243-2.327 2.25-5 2.25-2.672 0-5-1.007-5-2.25z"/></svg>
                        </span>
                    </div>
                    <div className="Box2">
                        <h2>Calidad Inmensurable</h2>
                        <p>Páginas de calidad excelente.</p>
                        <span className="SvgBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"/></svg>
                        </span>
                    </div>
                    <div className="Box3">
                        <h2>Diseños Alucinantes</h2>
                        <p>Páginas con diseños y estilos sublimes y extravagantes.</p>
                        <span className="SvgBox">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-2-16h-16v11s-.587-1-1.922-1c-1.104 0-2.078.896-2.078 2s.896 2 2 2h18v-14zm-2 12h-12v-10h12v10zm-8-9h-3v8h10v-8h-6v3h6v1h-2v3h-1v-3h-3v3h-1v-7z"/></svg>
                        </span>
                    </div>
                    <div className="Box4">
                        <h2>Animaciones Extraordinarias</h2>
                        <p>Sitios con animaciones, movimiento e interactividad.</p>
                        <span className="SvgBox">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M14.003 17.23c-.178.247-1.456.922-1.462-.396v-.464c.43-.208.731-.634.731-1.015 0-.526-.571-.762-1.272-.762-.701 0-1.271.236-1.271.762 0 .377.294.796.717 1.007v.472c-.008 1.227-1.18.829-1.392.453-.404-.716-1.249-.153-.94.423.29.541 1.001.918 1.73.918.446 0 .848-.146 1.149-.416.302.27.703.416 1.15.416.727 0 1.439-.377 1.729-.918.316-.584-.417-1.105-.869-.48zm.997-5.73c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.823-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.01-.822 1.833-1.833 1.833zm-6-2.667c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.46 0 .834-.374.834-.833 0-.46-.374-.834-.834-.834zm0 2.667c-1.011 0-1.833-.823-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.834.822 1.834 1.834 0 1.01-.823 1.833-1.834 1.833zm1.545-5.66c.772-.195 2.101-.198 2.909 0 .977-1.478 1.643-2.298 3.03-3.507 2.7 3.301 3.762 9.095 4.196 13.732-2.015 2.591-5.152 4.268-8.68 4.268-3.56 0-6.721-1.708-8.733-4.339.347-4.718 1.237-10.618 3.733-13.661 1.469 1.16 2.426 2.15 3.545 3.507zm1.455-8.507c-6.623 0-12 5.376-12 12 0 6.623 5.377 12 12 12s12-5.377 12-12c0-6.624-5.377-12-12-12z"/></svg>
                        </span>
                    </div>
                    <div className="Box5">
                        <h2>Personalización</h2>
                        <p>Sitios Web que capturan tu esencia.</p>
                        <span className="SvgBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.313c0-2.053-.754-3.026-1.417-3.489.391-1.524 1.03-5.146-.963-7.409-.938-1.065-2.464-1.54-4.12-1.274-1.301-.557-3.266-1.141-5.5-1.141s-4.199.584-5.5 1.141c-1.656-.266-3.182.208-4.12 1.274-1.993 2.263-1.353 5.885-.963 7.409-.663.463-1.417 1.435-1.417 3.489 0 .996.326 2.131.986 3.102-.485 1.421.523 3.049 2.283 2.854-.318 1.622 1.365 2.928 3.082 2.128-.201 1.163 1.421 2.58 3.443 1.569.671.572 1.188 1.034 2.204 1.034 1.155 0 1.846-.643 2.277-1.035 2.022 1.012 3.574-.406 3.374-1.569 1.718.8 3.4-.506 3.082-2.128 1.76.195 2.768-1.433 2.283-2.854.659-.97.986-2.106.986-3.101zm-12 6.57c-1.722 0-2.4-1.883-2.4-1.883h4.8s-.612 1.883-2.4 1.883zm3.578-2.992c-1.052-.515-2.455-1.126-3.578-.322-1.124-.804-2.526-.193-3.578.322-4.251 2.08-8.024-4.023-5.842-5.444.204-.132.488-.135.672-.053.661.292 1.406-.191 1.406-.914 0-2.214.692-4.434 2.154-5.988l.015-.01c2.604-2.596 7.741-2.596 10.345 0l.016.011c1.462 1.554 2.154 3.774 2.154 5.987 0 .726.748 1.205 1.406.914.141-.063.436-.1.671.053 2.15 1.392-1.514 7.561-5.841 5.444zm.172-7.391c-1.124 0-2.094.629-2.607 1.546-.373-.116-.744-.174-1.143-.174s-.77.058-1.143.174c-.513-.917-1.483-1.546-2.607-1.546-1.654 0-3 1.346-3 3s1.346 3 3 3c1.231 0 2.285-.748 2.747-1.811.246-.566.394-1.301 1.003-1.301s.758.735 1.003 1.301c.462 1.063 1.516 1.811 2.747 1.811 1.654 0 3-1.346 3-3s-1.346-3-3-3zm-7.5 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm7.5 0c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M10 18.993h6s-.765 2.354-3 2.354c-2.153 0-3-2.354-3-2.354zm8.927-3.995c0 1.262-1.171 2.25-2.667 2.25-1.138 0-1.954-.577-2.394-1.404-.229-.432-.412-.932-.867-.932s-.638.5-.867.932c-.439.828-1.255 1.404-2.394 1.404-1.495 0-2.667-.988-2.667-2.25s1.171-2.25 2.667-2.25c1.01 0 1.862.456 2.315 1.138.307-.102.615-.153.945-.153s.638.051.945.153c.453-.681 1.305-1.138 2.315-1.138 1.498 0 2.669.988 2.669 2.25zm-8.021 0c0-.414-.522-.75-1.167-.75s-1.167.336-1.167.75.522.75 1.167.75 1.167-.336 1.167-.75zm6.521 0c0-.414-.522-.75-1.167-.75s-1.167.336-1.167.75.522.75 1.167.75 1.167-.336 1.167-.75zm8.573-2.295c0 2.196-.95 4.32-2 5.728h-.002c-.509.741-1.208 1.386-2.137 1.781-2.349 3.731-5.484 5.781-8.861 5.781s-6.514-2.05-8.861-5.781c-.929-.395-1.628-1.04-2.137-1.781h-.002c-1.05-1.407-2-3.531-2-5.728 0-5.613 3.099-9.482 9.306-8.075-.781-.679-1.924-1.148-3.08-1.351 2.168-2.995 5.43-3.284 6.774-3.284s4.606.289 6.774 3.284c-1.156.203-2.3.672-3.08 1.351 6.121-1.388 9.306 2.356 9.306 8.075zm-5.985-.981c-4.757.28-7.015-2.135-7.015-3.458 0 1.324-2.257 3.738-7.015 3.458-2.557 7.819 2.914 12.271 7.015 12.271 3.894 0 9.642-4.237 7.015-12.271z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 25"><path d="M18.5 13.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-6.5 0c0-.828-.56-1.5-1.25-1.5s-1.25.672-1.25 1.5.56 1.5 1.25 1.5 1.25-.672 1.25-1.5zm2 6.854c2.235 0 3-2.354 3-2.354h-6s.847 2.354 3 2.354zm14-3.771c0 5.068-4.115 7.287-8.627 6.481-1.657 1.254-3.476 1.936-5.373 1.936s-3.717-.682-5.374-1.935c-4.511.805-8.626-1.413-8.626-6.482 0-7.998 5.641-16.583 14-16.583s14 8.585 14 16.583zm-6.669 1.252c.122-.202.313-.354.536-.43 1.565-.53 2.133-2.172 2.133-3.146 0-.28-.024-.528-.059-.757-4.181-.021-6.936-5.186-6.823-7.955-1.435 2.322-4.245 5.109-6.993 5.109.781-1.266.766-2.203.625-3.28-.633 1.267-3.118 5.292-6.633 5.85-.072.293-.117.632-.117 1.033 0 .975.568 2.617 2.133 3.146.224.076.414.228.536.43 2.011 3.331 4.614 5.165 7.331 5.165 2.716 0 5.32-1.834 7.331-5.165z"/></svg>
                        </span>
                    </div>
                    <div className="Box6">
                        <h2>Atención al Cliente</h2>
                        <p>Contáctanos en cualquier momento.</p>
                        <span className="SvgBox">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 25"><path d="M14.139 2.63l3.068-1.441.786 3.297 3.39.032-.722 3.312 3.038 1.5-2.087 2.671 2.087 2.67-3.038 1.499.722 3.312-3.39.033-.786 3.296-3.068-1.441-2.139 2.63-2.138-2.63-3.068 1.441-.787-3.296-3.389-.033.722-3.312-3.039-1.499 2.088-2.67-2.088-2.671 3.039-1.5-.722-3.312 3.389-.032.787-3.297 3.068 1.441 2.138-2.63 2.139 2.63zm-3.742 2.342l-2.303-1.081-.59 2.474-2.542.024.542 2.483-2.279 1.125 1.566 2.004-1.566 2.002 2.279 1.124-.542 2.485 2.542.025.59 2.472 2.303-1.081 1.603 1.972 1.604-1.972 2.301 1.081.59-2.472 2.543-.025-.542-2.485 2.279-1.124-1.565-2.002 1.565-2.004-2.279-1.125.542-2.483-2.543-.024-.59-2.474-2.301 1.081-1.604-1.972-1.603 1.972zm1.603 9.528c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1-.947h-2v-6.553h2v6.553z"/></svg>
                        </span>
                    </div>
                    <div className="Box7">
                        <h2>Super Optimizado</h2>
                        <p>Sitios web responsivos, para cualquier tipo de dispositivo</p>
                        <span className="SvgBox">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 25"><path d="M22 10h-1v-2h-11v13h5v1.617c0 .524.121 1.058.502 1.383h-5.002c-.398 0-.779-.158-1.061-.439-.281-.282-.439-.663-.439-1.061v-15c0-.398.158-.779.439-1.061.282-.281.663-.439 1.061-.439h10c.398 0 .779.158 1.061.439.281.282.439.663.439 1.061v2.5zm2 2.25c0-.69-.56-1.25-1.25-1.25h-5.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h5.5c.69 0 1.25-.56 1.25-1.25v-10.5zm-15.407 11.75h-6.593l2.599-3h3.401v1.804c0 .579.337 1.09.593 1.196zm11.407-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3-3v-6.024h-6v6.024h6zm-2-15h-2v-3h-17v15h6v2h-8v-19h21v5zm-.5 7h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1c.275 0 .5-.224.5-.5s-.225-.5-.5-.5z"/></svg>
                        </span>
                    </div>
                    <div className="Box8">
                        <h2>Entregas Rápidas</h2>
                        <p>Tendrás tu sitio en tan solo unos cuantos días</p>
                        <span className="SvgBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg>
                        </span>
                    </div>
                </Rosa>
            </span>

        </section>
    )
}

export default Block1