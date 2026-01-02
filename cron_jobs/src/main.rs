// Cargo.toml dependencies:
// tokio = { version = "1", features = ["full"] }
// reqwest = { version = "0.11", features = ["json"] }
// chrono = "0.4"

use std::time::Duration;
use tokio::time;
use reqwest::Error;

const BACKEND_URL: &str = "https://glorious-server.onrender.com";

#[tokio::main]
async fn main() {
    println!("Starting server ping task...");

    // Loop forever
    loop {
        println!("Pinging server...");
        if let Err(e) = ping_server().await {
            eprintln!("Error pinging server: {}", e);
        }
        // Wait 14 minutes before next ping
        time::sleep(Duration::from_secs(14 * 60)).await;
    }
}

async fn ping_server() -> Result<(), Error> {
    let response = reqwest::get(BACKEND_URL).await?;
    if response.status().is_success() {
        println!("Server ping successful! Status: {}", response.status());
    } else {
        eprintln!("Server ping failed! Status: {}", response.status());
    }
    Ok(())
}
