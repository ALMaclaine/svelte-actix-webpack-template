use actix_web::{HttpServer, HttpResponse, web, App};
use std::io;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Res {
    data: String,
}

#[actix_web::main]
async fn main() -> io::Result<()> {
    HttpServer::new(move || {
        App::new()
            .route("/api", web::get().to(|| HttpResponse::Ok().json(Res { data: "result".to_string() })))
    })
        .bind("127.0.0.1:3000")?
        .run()
        .await
}
