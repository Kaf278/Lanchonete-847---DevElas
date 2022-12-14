exports.getPaginaInicial = (req, res) => {
    res.render("inicial", {
        title: "Nossa história...",
        links: [{
            href: "/cardapio",
            label: "Cardápio"
        },
        {
            href: "/contato",
            label: "Contato"
        },
        {
            href: "/admin-login",
            label: "Admin"
        }
        ]
    });
};

exports.getContato = (req, res) => {
    res.render("contato", {
        title: "Contato",
        links: [{
            href: "/",
            label: "Home"
        },
        {
            href: "/cardapio",
            label: "Cardápio"
        },
        {
            href: "/admin-login",
            label: "Admin"
        }
        ]
    });
};

exports.getAdminLogin = (req, res) => {
    res.render("admin-login", {
        title: "Adminitração do Site",
        links: [{
            href: "/",
            label: "Home"
        },
        {
            href: "/contato",
            label: "Contato"
        },
        {
            href: "/cardapio",
            label: "Cardápio"
        }
        ]
    });
    //checar login
    // return res.redirect("/admin");
};

exports.getAdmin = (req, res) => {
    res.render("admin", {
        title: "Adminitração do Site",
        links: [{
            href: "/",
            label: "Home"
        },
        {
            href: "/contato",
            label: "Contato"
        },
        {
            href: "/cardapio",
            label: "Cardápio"
        }
        ]
    });
};