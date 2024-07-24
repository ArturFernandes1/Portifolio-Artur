import React from 'react'
import "../components/Forms.css"

function Forms(){
    return(
        <>
            <div class="container">
                <section class="guest-form">
                    <h2>Reserve sua estadia</h2>
                    <form id="cadastroForm" action="salvar_reserva.php" method="post">
                        <div class="form-group">
                            <label for="name">Nome:</label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div class="form-group">
                            <label for="checkin">Data de Check-in:</label>
                            <input type="date" id="checkin" name="checkin" required></input>
                        </div>
                        <div class="form-group">
                            <label for="checkout">Data de Check-out:</label>
                            <input type="date" id="checkout" name="checkout" required></input>
                        </div>
                        <button type="submit">Reservar</button>
                    </form>
                </section>
           </div>
        </>


    )
}
export default Forms