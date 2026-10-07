import type { Term } from "./types";

const r = (title: string, url: string, source: string) => ({ title, url, source });

export const termsQT: Term[] = [
  {
    slug: "quantization",
    name: "Quantization",
    letter: "Q",
    aliases: ["int8", "int4", "weight quantization"],
    category: "Systems",
    level: "intermediate",
    summary: "Storing and computing weights in fewer bits so a model uses less memory and bandwidth.",
    definition:
      "Quantization maps floating-point weights or activations to integers, often 8 or 4 bits. The model gets smaller and faster to load. Quality drops a little, and it drops more if you quantize a model that was already barely good enough.",
    inPractice:
      "Evaluate after you quantize, on your task, not on the vendor’s slogan. A 4-bit chat model can stay fluent and still lose exact tool arguments.",
    resources: [
      r("Quantization overview", "https://huggingface.co/docs/transformers/main/en/quantization/overview", "Hugging Face"),
      r("PyTorch quantization", "https://pytorch.org/docs/stable/quantization.html", "PyTorch"),
    ],
    related: ["qlora", "inference"],
  },
  {
    slug: "q-learning",
    name: "Q-Learning",
    letter: "Q",
    aliases: ["Q learning"],
    category: "Training",
    level: "advanced",
    summary: "A reinforcement-learning method that learns the value of each action in each state.",
    definition:
      "Q-learning estimates the return you should expect from taking an action and then behaving optimally. With a table of states it is simple. With a neural network approximating that table, it becomes DQN and needs extra machinery to stay stable.",
    inPractice:
      "Use it when actions are discrete and few. Continuous actions want a policy gradient or an actor-critic method instead.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Playing Atari with Deep Reinforcement Learning", "https://arxiv.org/abs/1312.5602", "arXiv"),
    ],
    related: ["q-function", "dqn"],
  },
  {
    slug: "qlora",
    name: "QLoRA",
    letter: "Q",
    aliases: ["quantized LoRA"],
    category: "Training",
    level: "advanced",
    summary: "Fine-tuning a quantized base model by training small LoRA adapters in higher precision.",
    definition:
      "QLoRA stores the frozen base model in 4-bit precision and trains LoRA weights in 16-bit. That combination is what made fine-tuning large models possible on a single high-memory GPU.",
    inPractice:
      "Keep the base quantization and the adapter together when you serve. Loading a 16-bit base with a QLoRA adapter trained on a 4-bit base is a mismatch.",
    resources: [
      r("QLoRA", "https://arxiv.org/abs/2305.14314", "arXiv"),
      r("LoRA", "https://arxiv.org/abs/2106.09685", "arXiv"),
    ],
    related: ["lora", "quantization"],
  },
  {
    slug: "query",
    name: "Query (Attention)",
    letter: "Q",
    aliases: ["attention query", "Q matrix"],
    category: "Models",
    level: "intermediate",
    summary: "The vector a token uses to ask which other tokens it should read.",
    definition:
      "Each token’s query is compared with every key. The scores become attention weights over values. In retrieval the word “query” also means the user’s search string; in a transformer diagram it means this vector.",
    inPractice:
      "When a paper says Q, K, and V, it means these three projections, not a database query. The database meaning shows up again in RAG, and the two are easy to mix in the same design doc.",
    resources: [
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
    ],
    related: ["attention-key", "attention"],
  },
  {
    slug: "question-answering",
    name: "Question Answering",
    letter: "Q",
    aliases: ["QA", "reading comprehension"],
    category: "Language",
    level: "foundational",
    summary: "A task where the system answers a question, ideally from a supplied source.",
    definition:
      "Extractive QA points at a span in a document. Generative QA writes an answer, which may or may not stay inside that document. The second kind needs a grounding check the first kind gets for free.",
    inPractice:
      "Prefer extractive answers when the source must be quotable. Use generation when you need to combine sources, and require the quotes alongside.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "https://arxiv.org/abs/2005.11430", "arXiv"),
    ],
    related: ["rag", "information-retrieval"],
  },
  {
    slug: "q-function",
    name: "Q-Function",
    letter: "Q",
    aliases: ["action-value function"],
    category: "Training",
    level: "advanced",
    summary: "The expected return of taking a particular action in a particular state, then following a policy.",
    definition:
      "The Q-function scores state-action pairs. If you know it, the best action is the one with the highest score. Learning it from sampled experience is Q-learning; using it to critique a policy is the critic in many actor-critic methods.",
    inPractice:
      "A learned Q overestimates. If you act on the max of a noisy estimate, you will prefer actions that got lucky once. That bias is why practical methods clip, average, or use two critics.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["q-learning", "value-function"],
  },
  {
    slug: "quantile-regression",
    name: "Quantile Regression",
    letter: "Q",
    aliases: ["quantile loss", "pinball loss"],
    category: "Models",
    level: "advanced",
    summary: "Predicting a chosen percentile of the outcome, not only the mean.",
    definition:
      "Ordinary regression targets the average. Quantile regression targets, for example, the 10th or 90th percentile, using an asymmetric loss. You get a picture of the spread instead of a single point that hides it.",
    inPractice:
      "Use a high quantile when under-predicting is expensive, such as capacity planning. Report which quantile you chose; “the forecast” is not specific enough.",
    resources: [
      r("QuantileRegressor", "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.QuantileRegressor.html", "scikit-learn"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["regression", "uncertainty-estimation"],
  },
  {
    slug: "quasi-newton-method",
    name: "Quasi-Newton Method",
    letter: "Q",
    aliases: ["L-BFGS"],
    category: "Training",
    level: "advanced",
    summary: "An optimizer that approximates curvature so it can take smarter steps than plain gradient descent.",
    definition:
      "Newton’s method uses second derivatives. Quasi-Newton methods, notably L-BFGS, build an approximation of that curvature from recent gradients. They converge fast on smooth, smaller problems and are awkward on the noisy, huge batches of deep learning.",
    inPractice:
      "Reach for L-BFGS on a convex or nearly convex model with a modest number of parameters. For transformers, stay with AdamW.",
    resources: [
      r("Limited-memory BFGS", "https://en.wikipedia.org/wiki/Limited-memory_BFGS", "Wikipedia"),
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["optimizer", "gradient"],
  },
  {
    slug: "quantization-aware-training",
    name: "Quantization-Aware Training",
    letter: "Q",
    aliases: ["QAT"],
    category: "Training",
    level: "advanced",
    summary: "Training while simulating low-precision arithmetic so the model adapts to the rounding it will see in production.",
    definition:
      "Post-training quantization rounds a finished model and hopes. Quantization-aware training inserts fake quantization in the forward pass so weights learn to live with that rounding. It costs a training run and usually recovers more accuracy than rounding after the fact.",
    inPractice:
      "Use QAT when post-training quantization misses your quality bar and you can afford to train. Match the fake quantizer to the kernels you will actually serve.",
    resources: [
      r("PyTorch quantization", "https://pytorch.org/docs/stable/quantization.html", "PyTorch"),
      r("Quantization overview", "https://huggingface.co/docs/transformers/main/en/quantization/overview", "Hugging Face"),
    ],
    related: ["quantization", "training"],
  },
  {
    slug: "quadratic-attention",
    name: "Quadratic Attention",
    letter: "Q",
    aliases: ["O(n^2) attention", "attention cost"],
    category: "Systems",
    level: "advanced",
    summary: "The fact that standard attention compares every token with every other token, so cost grows with the square of the length.",
    definition:
      "Computing all query-key scores takes work and memory proportional to sequence length squared. Doubling the context does not double the attention bill; it quadruples it. Sparse, linear, and windowed attention exist to escape that curve.",
    inPractice:
      "When a long-context request gets expensive, the square term is why. Retrieval of a short passage is often cheaper than attending over the whole corpus.",
    resources: [
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["attention", "long-context"],
  },
  {
    slug: "rag",
    name: "Retrieval-Augmented Generation",
    letter: "R",
    aliases: ["RAG"],
    category: "Agents",
    level: "intermediate",
    summary: "Answering by first fetching relevant documents, then letting the model read them.",
    definition:
      "RAG splits the job: a retriever finds passages, and a generator writes using those passages in its context. The knowledge can be updated by changing the index instead of retraining the model. The answer is only as grounded as the passages that were fetched.",
    inPractice:
      "Show the passages you used. If the right passage is not in the top results, fix retrieval before you rewrite the prompt.",
    resources: [
      r("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "https://arxiv.org/abs/2005.11430", "arXiv"),
      r("Retrieval-augmented generation", "https://www.pinecone.io/learn/retrieval-augmented-generation/", "Pinecone"),
    ],
    related: ["information-retrieval", "hallucination"],
  },
  {
    slug: "reinforcement-learning",
    name: "Reinforcement Learning",
    letter: "R",
    aliases: ["RL"],
    category: "Training",
    level: "intermediate",
    summary: "Learning by taking actions and receiving rewards, rather than by copying labeled answers.",
    definition:
      "An RL agent interacts with an environment, observes the result, and updates a policy to increase long-run reward. It is the framework behind game-playing systems and behind the RL stage of RLHF, where the “environment” is a reward model.",
    inPractice:
      "Specify the reward carefully. The agent will find loopholes in it, including ones that score well and do the wrong thing.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Proximal Policy Optimization Algorithms", "https://arxiv.org/abs/1707.06347", "arXiv"),
    ],
    related: ["policy", "reward-model"],
  },
  {
    slug: "rlhf",
    name: "RLHF",
    letter: "R",
    aliases: ["reinforcement learning from human feedback"],
    category: "Training",
    level: "advanced",
    summary: "Using human preferences to train a reward model, then optimizing a language model against that reward.",
    definition:
      "RLHF collects rankings of model outputs, fits a reward model to those rankings, and updates the policy — often with PPO — to score higher while staying close to the original model. It is how raw language models became assistants that follow instructions more carefully.",
    inPractice:
      "Read the preference guidelines your raters used. RLHF amplifies them, including shortcuts such as “longer is better.”",
    resources: [
      r("InstructGPT", "https://arxiv.org/abs/2203.02155", "arXiv"),
      r("Direct Preference Optimization", "https://arxiv.org/abs/2305.18290", "arXiv"),
    ],
    related: ["human-feedback", "dpo"],
  },
  {
    slug: "regularization",
    name: "Regularization",
    letter: "R",
    aliases: ["weight penalty"],
    category: "Training",
    level: "foundational",
    summary: "Any constraint that keeps a model from fitting the training data too perfectly.",
    definition:
      "Regularization adds a preference for simpler explanations: weight decay, dropout, early stopping, data augmentation, or a smaller architecture. It raises training loss on purpose so test loss can fall.",
    inPractice:
      "If the train/test gap is small, you may be regularizing a model that is still underfitting. Ease the penalty before you add more of it.",
    resources: [
      r("Deep Learning — regularization", "https://www.deeplearningbook.org/contents/regularization.html", "Goodfellow, Bengio, Courville"),
      r("Dropout", "https://jmlr.org/papers/v15/srivastava14a.html", "JMLR"),
    ],
    related: ["overfitting", "weight-decay"],
  },
  {
    slug: "reward-model",
    name: "Reward Model",
    letter: "R",
    aliases: ["preference model", "RM"],
    category: "Training",
    level: "advanced",
    summary: "A model trained to score outputs the way human raters would.",
    definition:
      "A reward model learns from pairwise preferences and then assigns a scalar to a completion. The policy optimizes that scalar. If the reward model is wrong, the policy will exploit it, producing text that scores well and reads badly.",
    inPractice:
      "Keep a set of preferences the reward model never trained on, and check that the policy still satisfies them after RL. That is where reward hacking shows up.",
    resources: [
      r("InstructGPT", "https://arxiv.org/abs/2203.02155", "arXiv"),
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
    ],
    related: ["rlhf", "human-feedback"],
  },
  {
    slug: "recall",
    name: "Recall",
    letter: "R",
    aliases: ["sensitivity", "true positive rate"],
    category: "Evaluation",
    level: "foundational",
    summary: "Of the cases that were actually positive, how many the model found.",
    definition:
      "Recall is true positives divided by all real positives. High recall means few misses. In retrieval it is the fraction of relevant documents that appeared in the results. It ignores how much junk came along; that is precision.",
    inPractice:
      "If a miss is expensive — a safety issue, a relevant document never shown — optimize recall first, then spend precision work on the false alarms you can afford to filter.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["precision", "f1-score"],
  },
  {
    slug: "regression",
    name: "Regression",
    letter: "R",
    aliases: ["regression model"],
    category: "Models",
    level: "foundational",
    summary: "Predicting a number, rather than a category.",
    definition:
      "Regression maps inputs to a real value: a price, a temperature, a probability you will treat as a score. The usual loss is squared error, which targets the mean, unless you deliberately pick another one.",
    inPractice:
      "Plot residuals. A low average error can hide a model that is badly wrong on the large values you care about most.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["quantile-regression", "loss-function"],
  },
  {
    slug: "recurrent-neural-network",
    name: "Recurrent Neural Network",
    letter: "R",
    aliases: ["RNN"],
    category: "Models",
    level: "intermediate",
    summary: "A network that reuses the same weights at each step and carries a hidden state forward.",
    definition:
      "An RNN reads a sequence one element at a time, updating a state that is supposed to remember what mattered. Training them across long gaps is hard because gradients shrink or explode. LSTMs and then transformers were responses to that.",
    inPractice:
      "Use an RNN when the sequence is a stream and you cannot wait for the whole thing. For offline text of moderate length, a transformer is the simpler strong default.",
    resources: [
      r("Deep Learning — sequence modeling", "https://www.deeplearningbook.org/contents/rnn.html", "Goodfellow, Bengio, Courville"),
      r("Long Short-Term Memory", "https://d2l.ai/chapter_recurrent-modern/lstm.html", "Dive into Deep Learning"),
    ],
    related: ["lstm", "vanishing-gradient"],
  },
  {
    slug: "representation",
    name: "Representation",
    letter: "R",
    aliases: ["learned representation"],
    category: "Foundations",
    level: "intermediate",
    summary: "The form the data takes inside the model, which decides what is easy to predict from it.",
    definition:
      "A representation is a set of features, learned or designed. Good ones make the downstream decision simple: neighbors in the space share a label, or a linear probe can read off the property you care about.",
    inPractice:
      "Probe a frozen representation before you fine-tune the whole model. If a linear classifier on the vectors already works, you may not need to touch the backbone.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("BERT", "https://arxiv.org/abs/1810.04805", "arXiv"),
    ],
    related: ["embedding", "feature"],
  },
  {
    slug: "router",
    name: "Router",
    letter: "R",
    aliases: ["MoE router", "expert router"],
    category: "Models",
    level: "advanced",
    summary: "The piece of a mixture-of-experts model that chooses which experts handle each token.",
    definition:
      "The router scores experts and sends the token to the top few. A good router balances quality with an even load. A bad one piles tokens onto one expert and leaves the others idle, so you pay for capacity you do not use.",
    inPractice:
      "Log expert utilization in production. A router collapse will not show up in a short demo.",
    resources: [
      r("Outrageously Large Neural Networks", "https://arxiv.org/abs/1701.06538", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["mixture-of-experts", "transformer"],
  },
  {
    slug: "supervised-learning",
    name: "Supervised Learning",
    letter: "S",
    aliases: ["supervised training"],
    category: "Foundations",
    level: "foundational",
    summary: "Learning from examples that already have the correct output attached.",
    definition:
      "Supervised learning fits a model to input-output pairs: a photo and its label, a sentence and its translation, a prompt and a demonstration. Most classifiers, fine-tunes, and instruction-tuning runs are supervised.",
    inPractice:
      "Budget more time for labels than for model choice. A clean labeled set with a simple model beats a clever model on messy labels.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["label", "unsupervised-learning"],
  },
  {
    slug: "self-attention",
    name: "Self-Attention",
    letter: "S",
    aliases: ["intra-attention"],
    category: "Models",
    level: "intermediate",
    summary: "Attention where the queries, keys, and values all come from the same sequence.",
    definition:
      "Self-attention lets every token gather information from the other tokens in the input. Stacked self-attention is the transformer. Cross-attention, by contrast, lets one sequence read a different one, as in an encoder-decoder.",
    inPractice:
      "Causal self-attention hides future tokens during training so a decoder cannot cheat by looking ahead. If you remove the mask, the loss will look miraculously good and the model will not generate.",
    resources: [
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["attention", "transformer"],
  },
  {
    slug: "softmax",
    name: "Softmax",
    letter: "S",
    aliases: ["softargmax"],
    category: "Models",
    level: "foundational",
    summary: "A function that turns a vector of scores into a probability distribution.",
    definition:
      "Softmax exponentiates each logit and divides by the sum, so the results are positive and add up to one. It is the last step of a classifier and of next-token prediction. Temperature scales the logits first and changes how peaked the distribution is.",
    inPractice:
      "Subtract the max logit before exponentiating. Without that shift, a large logit overflows and the whole distribution becomes NaN.",
    resources: [
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["logit", "temperature"],
  },
  {
    slug: "scaling-law",
    name: "Scaling Law",
    letter: "S",
    aliases: ["scaling laws"],
    category: "Training",
    level: "advanced",
    summary: "An empirical relationship between compute, data, model size, and loss.",
    definition:
      "Scaling laws describe how predictably loss falls as you spend more compute, if you grow parameters and data together. They are why training runs are planned as budgets. They do not guarantee a specific product skill, only a loss on the training distribution.",
    inPractice:
      "Use scaling trends to decide whether a bigger run is worth it. Verify the skill you sell with an evaluation, because loss and user value are not the same curve.",
    resources: [
      r("Scaling Laws for Neural Language Models", "https://arxiv.org/abs/2001.08361", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["flop", "pretraining"],
  },
  {
    slug: "self-supervised-learning",
    name: "Self-Supervised Learning",
    letter: "S",
    aliases: ["SSL"],
    category: "Training",
    level: "intermediate",
    summary: "Training on labels that the data already contains, such as a missing word or a matching pair of views.",
    definition:
      "Self-supervision builds a pretext task: predict the masked token, match two crops of one image, predict the next frame. The model learns a representation without a person labeling every example. Language-model pretraining is the large-scale version.",
    inPractice:
      "The pretext task has to be related to what you will use the model for. A representation trained only to match image crops may still be weak at reading text inside those images.",
    resources: [
      r("BERT", "https://arxiv.org/abs/1810.04805", "arXiv"),
      r("Self-Supervised Learning from Images with JEPA", "https://arxiv.org/abs/2301.08243", "arXiv"),
    ],
    related: ["pretraining", "masked-language-model"],
  },
  {
    slug: "system-prompt",
    name: "System Prompt",
    letter: "S",
    aliases: ["system message"],
    category: "Language",
    level: "foundational",
    summary: "Instructions that sit above the user message and set the model’s role, limits, and format.",
    definition:
      "The system prompt is the developer’s turn: who the assistant is, what it must not do, and how answers should look. It is not a security boundary. User text and retrieved text can still try to override it.",
    inPractice:
      "Keep it short and test it as a unit. A system prompt that contradicts the user-facing instructions produces brittle behavior that is hard to attribute.",
    resources: [
      r("Prompt engineering", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", "Anthropic"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["prompt", "guardrail"],
  },
  {
    slug: "speculative-decoding",
    name: "Speculative Decoding",
    letter: "S",
    aliases: ["speculative sampling"],
    category: "Systems",
    level: "advanced",
    summary: "A draft model proposes several tokens and a larger model verifies them in one pass.",
    definition:
      "Speculative decoding uses a cheap model to guess ahead and the target model to accept or reject those guesses. When the draft is often right, you get the same distribution as the large model at a lower latency.",
    inPractice:
      "The speedup depends on how well the draft matches the target. A draft that is constantly rejected is slower than decoding normally.",
    resources: [
      r("Fast Inference from Transformers via Speculative Decoding", "https://arxiv.org/abs/2211.17192", "arXiv"),
      r("vLLM documentation", "https://docs.vllm.ai/en/latest/", "vLLM"),
    ],
    related: ["inference", "autoregressive-model"],
  },
  {
    slug: "sampling",
    name: "Sampling",
    letter: "S",
    aliases: ["decoding", "random sampling"],
    category: "Language",
    level: "foundational",
    summary: "Drawing the next token from the model’s probability distribution instead of always taking the top one.",
    definition:
      "Sampling introduces randomness controlled by temperature, top-k, or nucleus cutoffs. It is how you get varied text. Greedy decoding, which always takes the argmax, is the zero-temperature extreme and tends to repeat itself.",
    inPractice:
      "For extraction and tool arguments, use greedy or a very low temperature. Sample when variation is a feature and you have a checker.",
    resources: [
      r("The Illustrated GPT-2", "https://jalammar.github.io/illustrated-gpt2/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["temperature", "nucleus-sampling"],
  },
  {
    slug: "stochastic-gradient-descent",
    name: "Stochastic Gradient Descent",
    letter: "S",
    aliases: ["SGD"],
    category: "Training",
    level: "foundational",
    summary: "Gradient descent that estimates the gradient from a small random batch instead of the full dataset.",
    definition:
      "SGD updates weights using the gradient of a minibatch. The noise in that estimate is a feature: it is cheaper than the full gradient and can help escape sharp minima. Adam is SGD plus adaptive scaling.",
    inPractice:
      "Shuffle the training set every epoch. SGD on a sorted dataset learns the order, not the task.",
    resources: [
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["gradient-descent", "batch-size"],
  },
  {
    slug: "semantic-search",
    name: "Semantic Search",
    letter: "S",
    aliases: ["vector search", "embedding search"],
    category: "Language",
    level: "intermediate",
    summary: "Retrieving documents by meaning, using embedding similarity rather than exact keywords.",
    definition:
      "Semantic search embeds the query and the documents and returns the nearest neighbors. It finds paraphrases keyword search misses, and it misses exact identifiers embeddings blur. Hybrid search exists because of that split.",
    inPractice:
      "Embed queries and documents with the same model and the same preprocessing. A mismatched instruction prefix on only one side silently wrecks the ranking.",
    resources: [
      r("Retrieval-augmented generation", "https://www.pinecone.io/learn/retrieval-augmented-generation/", "Pinecone"),
      r("Efficient and robust approximate nearest neighbor search using HNSW", "https://arxiv.org/abs/1603.09320", "arXiv"),
    ],
    related: ["embedding", "hybrid-search"],
  },
  {
    slug: "transformer",
    name: "Transformer",
    letter: "T",
    aliases: ["transformer architecture"],
    category: "Models",
    level: "foundational",
    summary: "The architecture behind most modern language and multimodal models, built from attention and feed-forward blocks.",
    definition:
      "A transformer stacks self-attention and a small MLP, with residual connections and normalization. It processes a sequence in parallel during training and scales well with data and compute. Decoders, encoders, and vision transformers are variations on that block.",
    inPractice:
      "Learn one block well: attention, the MLP, the residual, the norm. Almost every diagram you will see is that block repeated.",
    resources: [
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["attention", "self-attention"],
  },
  {
    slug: "token",
    name: "Token",
    letter: "T",
    aliases: ["subword", "token id"],
    category: "Language",
    level: "foundational",
    summary: "The unit a language model reads and writes, often a chunk of a word rather than a whole word.",
    definition:
      "A token is an integer in a fixed vocabulary. The tokenizer turns text into those integers and back. Prices, context limits, and latency are all counted in tokens, which is why a word count misleads.",
    inPractice:
      "Tokenize your real prompts once and record the counts. English prose is a poor estimate for code, JSON, or other languages.",
    resources: [
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
      r("Neural Machine Translation of Rare Words with Subword Units", "https://arxiv.org/abs/1508.07909", "arXiv"),
    ],
    related: ["tokenizer", "context-window"],
  },
  {
    slug: "tokenizer",
    name: "Tokenizer",
    letter: "T",
    aliases: ["BPE tokenizer"],
    category: "Language",
    level: "foundational",
    summary: "The program that splits text into tokens and maps them to ids.",
    definition:
      "The tokenizer is trained, usually with byte-pair encoding, and then frozen. The model only ever sees its ids. Swapping tokenizers between checkpoints corrupts every weight that expected the old ids.",
    inPractice:
      "Ship the tokenizer with the weights. If you fine-tune, do not add tokens unless you also train the new rows of the embedding table.",
    resources: [
      r("Neural Machine Translation of Rare Words with Subword Units", "https://arxiv.org/abs/1508.07909", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["byte-pair-encoding", "vocabulary"],
  },
  {
    slug: "training",
    name: "Training",
    letter: "T",
    aliases: ["model training", "fitting"],
    category: "Training",
    level: "foundational",
    summary: "The process of updating a model’s weights so its loss falls on the training data.",
    definition:
      "Training loops over batches, computes a loss, backpropagates, and steps the optimizer. Pretraining, fine-tuning, and preference optimization are all training with different data and losses. Inference is what happens after you stop.",
    inPractice:
      "Save checkpoints often and keep the exact data snapshot. A training run you cannot resume or reproduce is a demo, not a result.",
    resources: [
      r("Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "Andrej Karpathy"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["inference", "loss-function"],
  },
  {
    slug: "temperature",
    name: "Temperature",
    letter: "T",
    aliases: ["sampling temperature"],
    category: "Language",
    level: "foundational",
    summary: "A dial that makes the next-token distribution sharper or flatter before you sample.",
    definition:
      "Temperature divides logits before softmax. Below 1 the model sticks closer to its top choice. Above 1 it spreads probability into less likely tokens. Zero is greedy decoding.",
    inPractice:
      "Set temperature per task, not per brand. Factual extraction wants it low. Brainstorming can take it higher if a person or a checker will filter the results.",
    resources: [
      r("The Illustrated GPT-2", "https://jalammar.github.io/illustrated-gpt2/", "Jay Alammar"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["sampling", "softmax"],
  },
  {
    slug: "transfer-learning",
    name: "Transfer Learning",
    letter: "T",
    aliases: ["transfer"],
    category: "Training",
    level: "foundational",
    summary: "Reusing a model trained on one task as the starting point for another.",
    definition:
      "Transfer learning works when the first task taught features the second task needs. Pretraining plus fine-tuning is the dominant form. Transfer fails when the new domain shares little with the old one and you have too little data to adapt.",
    inPractice:
      "Compare against a model trained only on your data when that data is plentiful. Transfer is not automatically better; it is a head start.",
    resources: [
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["fine-tuning", "pretraining"],
  },
  {
    slug: "tool-use",
    name: "Tool Use",
    letter: "T",
    aliases: ["tools", "tool calling"],
    category: "Agents",
    level: "intermediate",
    summary: "Letting a model call external functions — search, code, a database — and read back the results.",
    definition:
      "Tool use extends a model past its weights. The model chooses a tool and arguments; your runtime executes them and returns an observation. The quality of the tools and the permission checks matter more than the phrasing of the prompt.",
    inPractice:
      "Allowlist the tools per user. A model that can call anything the server can call will eventually be asked to.",
    resources: [
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
      r("Model Context Protocol", "https://modelcontextprotocol.io/docs/getting-started/intro", "MCP"),
    ],
    related: ["function-calling", "agent"],
  },
  {
    slug: "tensor",
    name: "Tensor",
    letter: "T",
    aliases: ["ndarray"],
    category: "Foundations",
    level: "foundational",
    summary: "A multidimensional array — the object neural networks actually compute on.",
    definition:
      "Scalars, vectors, and matrices are tensors of rank 0, 1, and 2. A batch of token embeddings is a higher-rank tensor. Frameworks are libraries for moving and multiplying them on CPUs and GPUs.",
    inPractice:
      "Write the shape next to every tensor when you debug. The majority of framework errors are two shapes that cannot be multiplied.",
    resources: [
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
      r("Deep Learning — linear algebra", "https://www.deeplearningbook.org/contents/linear_algebra.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["gpu", "parameter"],
  },
  {
    slug: "top-k-sampling",
    name: "Top-k Sampling",
    letter: "T",
    aliases: ["top-k"],
    category: "Language",
    level: "intermediate",
    summary: "Sampling the next token from only the k most likely candidates.",
    definition:
      "Top-k truncates the distribution to a fixed number of tokens and renormalizes. Unlike nucleus sampling, the cutoff does not shrink when the model is already confident, so k that is fine for an open question can still let noise into a nearly certain one.",
    inPractice:
      "If you set one cutoff, prefer top-p. Use top-k as an extra cap so a flat distribution cannot sample the entire vocabulary.",
    resources: [
      r("The Illustrated GPT-2", "https://jalammar.github.io/illustrated-gpt2/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["nucleus-sampling", "sampling"],
  },
  {
    slug: "tree-of-thought",
    name: "Tree of Thought",
    letter: "T",
    aliases: ["ToT"],
    category: "Language",
    level: "advanced",
    summary: "A prompting pattern that explores several reasoning branches and keeps the promising ones.",
    definition:
      "Tree of thought asks the model for multiple next steps, scores them, and expands only the better branches. It spends more calls than a single chain of thought in exchange for a chance to abandon a bad start.",
    inPractice:
      "Use it when a wrong first step ruins the answer and you can score partial progress automatically. Otherwise you are paying for branches nobody prunes.",
    resources: [
      r("Chain-of-Thought Prompting", "https://arxiv.org/abs/2201.11903", "arXiv"),
      r("Prompt engineering guide", "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/", "Lilian Weng"),
    ],
    related: ["chain-of-thought", "inference-time-scaling"],
  },
];
