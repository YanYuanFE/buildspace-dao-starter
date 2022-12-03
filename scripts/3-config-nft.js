import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import path from 'path';

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x0f8DBd4107F304142b060281A257D026Bb1EdE48", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync(path.resolve("./scripts/assets/headband.png")),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();