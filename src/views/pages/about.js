//templating pain

let About ={
    render : async () =>{
        let view = `
            <section class= "Section>
                <h1> About </h1>
            </section>
        `
        return view
    },
    after_render: async() =>{
        document.getElementById("myBtn").addEventListener("Click", () => {
            console.log('Yo')
            alert(Yo)
        })

    }
}

export default About;