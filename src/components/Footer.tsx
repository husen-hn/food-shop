function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="text-white text-center p-12">{`Copyright © Mishka Code ${year}`}</footer>
    )
}

export default Footer
