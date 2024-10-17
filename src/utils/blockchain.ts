// This is a placeholder for blockchain integration
// In a real-world scenario, we'd implement actual blockchain functionality

export interface Block {
  index: number;
  timestamp: number;
  data: any;
  previousHash: string;
  hash: string;
}

export class Blockchain {
  chain: Block[];

  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(): Block {
    return {
      index: 0,
      timestamp: Date.now(),
      data: 'Genesis Block',
      previousHash: '0',
      hash: this.calculateHash(0, '0', Date.now(), 'Genesis Block'),
    };
  }

  getLatestBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data: any): void {
    const previousBlock = this.getLatestBlock();
    const newBlock: Block = {
      index: previousBlock.index + 1,
      timestamp: Date.now(),
      data: data,
      previousHash: previousBlock.hash,
      hash: '',
    };
    newBlock.hash = this.calculateHash(newBlock.index, newBlock.previousHash, newBlock.timestamp, newBlock.data);
    this.chain.push(newBlock);
  }

  calculateHash(index: number, previousHash: string, timestamp: number, data: any): string {
    return `${index}${previousHash}${timestamp}${JSON.stringify(data)}`;
  }

  isChainValid(): boolean {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== this.calculateHash(currentBlock.index, currentBlock.previousHash, currentBlock.timestamp, currentBlock.data)) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

export const blockchain = new Blockchain();