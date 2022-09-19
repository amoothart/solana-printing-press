import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PrintingPress } from "../target/types/printing_press";

describe("printing-press", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.PrintingPress as Program<PrintingPress>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
