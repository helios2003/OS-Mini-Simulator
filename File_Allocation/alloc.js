function allocateContiguousFile() {
    var fileName = document.getElementById("contiguous-file-name").value;
    var startBlock = parseInt(document.getElementById("contiguous-start-block").value);
    var blockCount = parseInt(document.getElementById("contiguous-block-count").value);

    if (fileName === "" || isNaN(startBlock) || isNaN(blockCount) || startBlock < 1 || blockCount < 1) {
      alert("Please enter a valid file name, start block number, and number of blocks.");
      return;
    }

    var blocks = [];
    for (var i = startBlock; i < startBlock + blockCount; i++) {
      blocks.push("Block " + i);
    }

    var output = "File Name: " + fileName + "<br>" +
                 "Allocation: Contiguous<br>" +
                 "Start Block: " + startBlock + "<br>" +
                 "Block Count: " + blockCount + "<br>" +
                 "Blocks: " + blocks.join(", ");

    document.getElementById("output").innerHTML = output;
  }

  function allocateLinkedFile() {
    var fileName = document.getElementById("linked-file-name").value;
    var startBlock = parseInt(document.getElementById("linked-start-block").value);
    var blockCount = parseInt(document.getElementById("linked-block-count").value);

    if (fileName === "" || isNaN(startBlock) || isNaN(blockCount) || startBlock < 1 || blockCount < 1) {
      alert("Please enter a valid file name, start block number, and number of blocks.");
      return;
    }

    var blocks = [];
    for (var i = startBlock; i < startBlock + blockCount; i++) {
      blocks.push("Block " + i);
    }

    var output = "File Name: " + fileName + "<br>" +
                 "Allocation: Linked<br>" +
                 "Start Block: " + startBlock + "<br>" +
                 "Block Count: " + blockCount + "<br>" +
                 "Blocks: " + blocks.join(", ");

    document.getElementById("output").innerHTML = output;
  }

  function allocateIndexedFile() {
    var fileName = document.getElementById("indexed-file-name").value;
    var indexBlock = parseInt(document.getElementById("indexed-index-block").value);
    var blockCount = parseInt(document.getElementById("indexed-block-count").value);

    if (fileName === "" || isNaN(indexBlock) || isNaN(blockCount) || indexBlock < 1 || blockCount < 1) {
      alert("Please enter a valid file name, index block number, and number of blocks.");
      return;
    }

    var blocks = [];
    for (var i = 0; i < blockCount; i++) {
      blocks.push("Block " + (indexBlock + i));
    }

    var output = "File Name: " + fileName + "<br>" +
                 "Allocation: Indexed<br>" +
                 "Index Block: " + indexBlock + "<br>" +
                 "Block Count: " + blockCount + "<br>" +
                 "Blocks: " + blocks.join(", ");

    document.getElementById("output").innerHTML = output;
  }