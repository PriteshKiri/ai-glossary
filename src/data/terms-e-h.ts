import type { Term } from "./types";

const r = (title: string, url: string, source: string) => ({ title, url, source });

export const termsEH: Term[] = [
  {
    slug: "embedding",
    name: "Embedding",
    letter: "E",
    aliases: ["vector representation"],
    category: "Language",
    level: "foundational",
    summary: "A list of numbers that places a token, sentence, or image near others with a similar meaning.",
    definition:
      "An embedding is the model’s working representation: a point in a high-dimensional space learned so that useful neighbors sit close together. Search, clustering, and the first layer of a language model all depend on that geometry.",
    inPractice:
      "Embed the query and the documents with the same model. Mixing two embedding models in one index gives you distances that do not mean anything.",
    resources: [
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["vector-database", "word-embedding"],
  },
  {
    slug: "epoch",
    name: "Epoch",
    letter: "E",
    aliases: ["training epoch"],
    category: "Training",
    level: "foundational",
    summary: "One full pass through the training set.",
    definition:
      "An epoch ends when every training example has been seen once, usually in random order and in batches. Language-model pretraining often counts tokens or steps instead, because the corpus is too large to repeat many times.",
    inPractice:
      "Plot loss against steps, not only epochs. A small dataset can overfit in a handful of epochs while the curve still looks smooth.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
    ],
    related: ["batch-size", "training"],
  },
  {
    slug: "evaluation",
    name: "Evaluation",
    letter: "E",
    aliases: ["eval", "model evaluation"],
    category: "Evaluation",
    level: "foundational",
    summary: "Measuring a model on data and tasks it must not have been tuned to memorize.",
    definition:
      "Evaluation turns a vague hope into a number you can compare: accuracy, a rubric, a human preference, or a business outcome. The design of the set matters more than the decimal places.",
    inPractice:
      "Freeze the test set before you start tuning prompts. Every peek is a tiny training step you did not account for.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["benchmark", "validation-set"],
  },
  {
    slug: "encoder",
    name: "Encoder",
    letter: "E",
    aliases: ["bidirectional encoder"],
    category: "Models",
    level: "intermediate",
    summary: "A stack that reads a whole input and turns it into a representation, without writing a new sequence.",
    definition:
      "Encoders use bidirectional attention, so each token can see the tokens on both sides. That makes them strong at classification, retrieval, and anything where the full input is known up front.",
    inPractice:
      "If you only need a vector or a label, an encoder is smaller and faster than prompting a chat model to say the label back.",
    resources: [
      r("BERT", "https://arxiv.org/abs/1810.04805", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["decoder", "bert"],
  },
  {
    slug: "ensemble",
    name: "Ensemble",
    letter: "E",
    aliases: ["model ensemble"],
    category: "Models",
    level: "intermediate",
    summary: "Combining several models so their mistakes cancel more often than they compound.",
    definition:
      "An ensemble averages predictions, votes on a class, or stacks one model on another’s output. Diversity matters: copies of the same model with the same errors do not help.",
    inPractice:
      "Ensembling large language models multiplies the bill. Try it for a high-stakes classifier first, where each member is cheap.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["variance", "xgboost"],
  },
  {
    slug: "early-stopping",
    name: "Early Stopping",
    letter: "E",
    aliases: ["stopped training"],
    category: "Training",
    level: "foundational",
    summary: "Ending training when validation performance stops improving, before the model memorizes the training set.",
    definition:
      "You watch a metric on held-out data and halt after it fails to improve for a set number of checks. The weights from the best checkpoint are the ones you keep.",
    inPractice:
      "Restore the best checkpoint, not the final step. The last epoch is often the most overfit.",
    resources: [
      r("Deep Learning — regularization", "https://www.deeplearningbook.org/contents/regularization.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["overfitting", "validation-set"],
  },
  {
    slug: "emergent-abilities",
    name: "Emergent Abilities",
    letter: "E",
    aliases: ["emergence"],
    category: "Models",
    level: "advanced",
    summary: "Skills that seem to appear suddenly once a model passes a scale threshold.",
    definition:
      "Some benchmarks stay near chance and then jump as models get larger or train longer. Part of the jump is real capability, and part is an artifact of a metric that scores partial progress as zero.",
    inPractice:
      "Do not plan a product on a skill that only shows up in one paper’s curve. Re-test it with a metric that gives partial credit.",
    resources: [
      r("Scaling Laws for Neural Language Models", "https://arxiv.org/abs/2001.08361", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["scaling-law", "foundation-model"],
  },
  {
    slug: "end-to-end-learning",
    name: "End-to-End Learning",
    letter: "E",
    aliases: ["end-to-end training"],
    category: "Training",
    level: "intermediate",
    summary: "Training one model from raw input to final output, instead of a pipeline of hand-tuned stages.",
    definition:
      "End-to-end learning lets the loss shape every stage, so the features exist to serve the actual objective. You give up the ability to inspect or swap a middle stage, and you need more data to make up for the missing human structure.",
    inPractice:
      "Keep a modular baseline. If the end-to-end model cannot beat it on your metric, the pipeline was carrying useful bias.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["pipeline", "representation"],
  },
  {
    slug: "error-analysis",
    name: "Error Analysis",
    letter: "E",
    aliases: ["failure analysis"],
    category: "Evaluation",
    level: "foundational",
    summary: "Reading the cases a model gets wrong and grouping them until a pattern shows up.",
    definition:
      "Error analysis is how you decide what to fix next: bad labels, a missing feature, a prompt, or a class you barely have data for. A single average hides which of those it is.",
    inPractice:
      "Sample fifty failures and tag them by hand before you change the model. The tags are the roadmap.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["evaluation", "ground-truth"],
  },
  {
    slug: "exploration-exploitation",
    name: "Exploration vs Exploitation",
    letter: "E",
    aliases: ["explore-exploit", "exploration"],
    category: "Training",
    level: "intermediate",
    summary: "The tradeoff between trying something new and using the best action you already know.",
    definition:
      "Exploitation takes the action with the highest estimated value. Exploration tries others so the estimate can improve. Reinforcement learning is mostly the design of that balance.",
    inPractice:
      "In a live recommender, pure exploitation locks in early winners. Keep a small slice of traffic for alternatives you are still unsure about.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["reinforcement-learning", "policy"],
  },
  {
    slug: "fine-tuning",
    name: "Fine-Tuning",
    letter: "F",
    aliases: ["finetuning", "supervised fine-tuning", "SFT"],
    category: "Training",
    level: "foundational",
    summary: "Continuing training on a narrower dataset so a general model picks up a specific behavior.",
    definition:
      "Fine-tuning starts from pretrained weights and updates them on examples of the task you care about: labeled pairs, demonstrations, or preferences. You need far less data than pretraining, and you can also erase skills if you overdo it.",
    inPractice:
      "Evaluate the original tasks after the fine-tune. A model that learned your format and forgot everything else is a regression.",
    resources: [
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
      r("LoRA", "https://arxiv.org/abs/2106.09685", "arXiv"),
    ],
    related: ["pretraining", "lora"],
  },
  {
    slug: "foundation-model",
    name: "Foundation Model",
    letter: "F",
    aliases: ["base model"],
    category: "Models",
    level: "foundational",
    summary: "A large model trained on broad data so it can be adapted to many downstream jobs.",
    definition:
      "Foundation models are the pretrained systems other products sit on: language models, vision-language models, and speech models trained once and reused. The adaptation might be a prompt, a fine-tune, or a retrieval layer.",
    inPractice:
      "Read the license and the training-data summary before you build on one. The base model’s limits become your product’s limits.",
    resources: [
      r("Language Models are Few-Shot Learners", "https://arxiv.org/abs/2005.14165", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["pretraining", "llm"],
  },
  {
    slug: "feature",
    name: "Feature",
    letter: "F",
    aliases: ["input feature", "covariate"],
    category: "Data",
    level: "foundational",
    summary: "An individual measurable property of an example that the model is allowed to see.",
    definition:
      "Features are the columns in a table, the pixels in an image, or the tokens in a sentence. Classical ML spends its effort designing them; deep learning learns them, but the raw input is still a choice.",
    inPractice:
      "If a feature would not be available at decision time, leave it out of training. Otherwise the model will lean on a signal you cannot ship.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["label", "representation"],
  },
  {
    slug: "few-shot-learning",
    name: "Few-Shot Learning",
    letter: "F",
    aliases: ["few-shot prompting", "in-context examples"],
    category: "Language",
    level: "intermediate",
    summary: "Showing a model a handful of worked examples instead of training on thousands.",
    definition:
      "Few-shot learning, in the language-model sense, means putting examples in the prompt and asking for the same pattern on a new input. The weights do not change; the context does.",
    inPractice:
      "Three to five diverse examples beat twenty near-duplicates. Include one tricky case so the pattern is not only the happy path.",
    resources: [
      r("Language Models are Few-Shot Learners", "https://arxiv.org/abs/2005.14165", "arXiv"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["prompt", "in-context-learning"],
  },
  {
    slug: "f1-score",
    name: "F1 Score",
    letter: "F",
    aliases: ["F1", "F-measure"],
    category: "Evaluation",
    level: "foundational",
    summary: "A single number that balances precision and recall.",
    definition:
      "F1 is the harmonic mean of precision and recall, so it stays low if either one is low. It is the right headline metric when both false alarms and missed cases are costly, and a poor one when they are not.",
    inPractice:
      "Report precision and recall beside F1. The blend hides which error your users will actually feel.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["precision", "recall"],
  },
  {
    slug: "forward-pass",
    name: "Forward Pass",
    letter: "F",
    aliases: ["forward propagation"],
    category: "Training",
    level: "foundational",
    summary: "Running an input through the network to produce an output, before any gradients are computed.",
    definition:
      "The forward pass applies each layer in order and records the activations the backward pass will need. Inference is a forward pass with dropout off and no graph stored for gradients.",
    inPractice:
      "Time the forward pass separately from the backward pass. Generation cost is almost all forward; training cost is dominated by the backward pass.",
    resources: [
      r("Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "Andrej Karpathy"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["backpropagation", "inference"],
  },
  {
    slug: "function-calling",
    name: "Function Calling",
    letter: "F",
    aliases: ["tool calling", "function call"],
    category: "Agents",
    level: "intermediate",
    summary: "A model choosing a function name and arguments instead of answering in prose.",
    definition:
      "You describe functions to the model, and it returns a structured call when one of them would help. Your code runs the function and feeds the result back for the next turn.",
    inPractice:
      "Validate arguments before you execute them. The model will invent fields, omit required ones, and occasionally call a function the user did not need.",
    resources: [
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
    ],
    related: ["tool-use", "json-mode"],
  },
  {
    slug: "federated-learning",
    name: "Federated Learning",
    letter: "F",
    aliases: ["federated training"],
    category: "Training",
    level: "advanced",
    summary: "Training a shared model while the raw examples stay on the devices that collected them.",
    definition:
      "Each client computes an update locally and sends that update, not the data, to a server that averages them. It reduces central data collection and adds hard problems: uneven clients, slow devices, and updates that can still leak information.",
    inPractice:
      "Only reach for federated learning when data cannot move. It is an infrastructure project, not a training trick.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["training", "privacy"],
  },
  {
    slug: "flop",
    name: "FLOP",
    letter: "F",
    aliases: ["FLOPs", "floating-point operation"],
    category: "Systems",
    level: "intermediate",
    summary: "One floating-point arithmetic operation; the usual unit for how much compute a model uses.",
    definition:
      "FLOPs count the adds and multiplies in a forward or training step. Papers use them to compare models of different sizes, and hardware specs quote FLOPs per second, which you will not hit in real training.",
    inPractice:
      "Compare training FLOPs when you compare scaling claims. A parameter count alone does not say how much work the run did.",
    resources: [
      r("Scaling Laws for Neural Language Models", "https://arxiv.org/abs/2001.08361", "arXiv"),
      r("CUDA Zone", "https://developer.nvidia.com/cuda-zone", "NVIDIA"),
    ],
    related: ["gpu", "scaling-law"],
  },
  {
    slug: "fairness",
    name: "Fairness",
    letter: "F",
    aliases: ["ML fairness"],
    category: "Safety",
    level: "intermediate",
    summary: "A set of demands that a model’s errors not fall in a way you have decided is unjust.",
    definition:
      "There is no single fairness metric. Equal error rates, equal outcomes, and equal calibration can contradict each other, so the product decision is which harm you will measure and which you will accept.",
    inPractice:
      "Pick the metric with the people who carry the risk, then put it on the same dashboard as accuracy. A fairness number nobody watches will drift.",
    resources: [
      r("Fairness overview", "https://developers.google.com/machine-learning/crash-course/fairness", "Google"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["bias", "evaluation"],
  },
  {
    slug: "gradient",
    name: "Gradient",
    letter: "G",
    aliases: ["partial derivatives"],
    category: "Training",
    level: "foundational",
    summary: "The direction and steepness of the loss with respect to each parameter.",
    definition:
      "The gradient is a vector of derivatives. Moving parameters a small step against it reduces the loss locally, which is the entire mechanism of gradient descent.",
    inPractice:
      "Watch the gradient norm. A sudden spike usually means a bad batch, a learning rate that is too high, or a loss that overflowed.",
    resources: [
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
      r("Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "Andrej Karpathy"),
    ],
    related: ["gradient-descent", "backpropagation"],
  },
  {
    slug: "gradient-descent",
    name: "Gradient Descent",
    letter: "G",
    aliases: ["steepest descent"],
    category: "Training",
    level: "foundational",
    summary: "Updating weights by stepping opposite the gradient, over and over.",
    definition:
      "Full-batch gradient descent uses every example for each step. Stochastic and minibatch versions use a sample, which is noisier and far more practical. Nearly all deep learning is a dressed-up version of this loop.",
    inPractice:
      "If loss does not move, the learning rate is too small or the gradient is not flowing. If it diverges, the rate is too large.",
    resources: [
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["stochastic-gradient-descent", "learning-rate"],
  },
  {
    slug: "gpt",
    name: "GPT",
    letter: "G",
    aliases: ["generative pre-trained transformer"],
    category: "Language",
    level: "foundational",
    summary: "A family of decoder-only transformers trained to predict the next token, then adapted to follow instructions.",
    definition:
      "GPT models pretrain on next-token prediction and later get instruction tuning and preference training so they behave like assistants. The name refers to both the architecture pattern and specific model lines.",
    inPractice:
      "A base GPT completes text. A chat model follows instructions. Using the wrong one looks like a prompt bug and is actually a checkpoint choice.",
    resources: [
      r("Language Models are Few-Shot Learners", "https://arxiv.org/abs/2005.14165", "arXiv"),
      r("The Illustrated GPT-2", "https://jalammar.github.io/illustrated-gpt2/", "Jay Alammar"),
    ],
    related: ["transformer", "llm"],
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    letter: "G",
    aliases: ["genAI", "generative model"],
    category: "Models",
    level: "foundational",
    summary: "Models that produce new text, images, audio, or other artifacts, rather than only a label.",
    definition:
      "Generative models learn a distribution and sample from it. The output can be novel and still wrong, which is the difference between a generator and a database.",
    inPractice:
      "Decide what the product must never invent — citations, prices, medical doses — and check those fields outside the model.",
    resources: [
      r("The Illustrated Stable Diffusion", "https://jalammar.github.io/illustrated-stable-diffusion/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["diffusion-model", "language-model"],
  },
  {
    slug: "gan",
    name: "GAN",
    letter: "G",
    aliases: ["generative adversarial network"],
    category: "Models",
    level: "intermediate",
    summary: "Two networks in a contest: one generates fakes, the other tries to tell them from real examples.",
    definition:
      "The generator improves until the discriminator cannot reliably tell its samples from the data. GANs produced the first sharp learned images at scale and are famously brittle to train. Diffusion models took over many of their old jobs.",
    inPractice:
      "If you are starting a new image generator, begin with diffusion. Study GANs to understand the adversarial training idea, not as the default stack.",
    resources: [
      r("Generative Adversarial Nets", "https://arxiv.org/abs/1406.2661", "arXiv"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["generative-ai", "discriminator"],
  },
  {
    slug: "generalization",
    name: "Generalization",
    letter: "G",
    aliases: ["generalisation"],
    category: "Foundations",
    level: "foundational",
    summary: "How well a model handles examples it did not train on.",
    definition:
      "A model generalizes when the pattern it learned is the one that also holds outside the training set. The gap between training error and test error is the usual symptom that it did not.",
    inPractice:
      "Celebrate the test number, not the training number. Training loss can go to zero on a memorizer.",
    resources: [
      r("Deep Learning — regularization", "https://www.deeplearningbook.org/contents/regularization.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["overfitting", "validation-set"],
  },
  {
    slug: "ground-truth",
    name: "Ground Truth",
    letter: "G",
    aliases: ["gold label", "reference"],
    category: "Data",
    level: "foundational",
    summary: "The answer you treat as correct when you score a model.",
    definition:
      "Ground truth is a decision, not a fact of nature: a clinician’s label, a reference translation, a clicked result. If the labeling rule is fuzzy, the model will be punished for matching a different reasonable reading.",
    inPractice:
      "Measure agreement between labelers on a sample. If they disagree often, no model will look good, and the rubric is what needs work.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["label", "evaluation"],
  },
  {
    slug: "guardrail",
    name: "Guardrail",
    letter: "G",
    aliases: ["safety filter", "policy check"],
    category: "Safety",
    level: "intermediate",
    summary: "A check around a model that blocks, rewrites, or escalates inputs and outputs.",
    definition:
      "Guardrails are the product layer: classifiers, allowlists, schemas, and human review that sit in front of or behind the model. They are not a substitute for a safer model, and a safer model is not a substitute for them.",
    inPractice:
      "Put deterministic checks on anything with a structure you can verify — JSON schema, permitted tools, numeric ranges — and use a model judge only for what a rule cannot see.",
    resources: [
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
      r("Prompt engineering", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", "Anthropic"),
    ],
    related: ["jailbreak", "safety"],
  },
  {
    slug: "gpu",
    name: "GPU",
    letter: "G",
    aliases: ["graphics processing unit", "accelerator"],
    category: "Systems",
    level: "foundational",
    summary: "A processor built for huge numbers of parallel arithmetic operations, which is what neural nets need.",
    definition:
      "Training and serving large models is mostly matrix multiplication. GPUs (and similar accelerators) do that work in parallel. The scarce resources are memory on the chip and the bandwidth between chips.",
    inPractice:
      "A job that barely fits in GPU memory will spend its time moving data. Reducing batch size or precision is often faster than waiting on a bigger machine.",
    resources: [
      r("CUDA Zone", "https://developer.nvidia.com/cuda-zone", "NVIDIA"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["cuda", "vram"],
  },
  {
    slug: "graph-neural-network",
    name: "Graph Neural Network",
    letter: "G",
    aliases: ["GNN"],
    category: "Models",
    level: "advanced",
    summary: "A network that passes messages along the edges of a graph so each node learns from its neighbors.",
    definition:
      "GNNs update a node’s vector by aggregating the vectors of nodes connected to it, then repeating. They fit molecules, social graphs, and citation networks, where the links are the point.",
    inPractice:
      "If your data is a table of independent rows, a GNN adds complexity you will not use. Use it when the edges carry the signal.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("Dive into Deep Learning", "https://d2l.ai/", "d2l.ai"),
    ],
    related: ["representation", "neural-network"],
  },
  {
    slug: "hallucination",
    name: "Hallucination",
    letter: "H",
    aliases: ["confabulation", "fabricated output"],
    category: "Safety",
    level: "foundational",
    summary: "A fluent answer that is not grounded in the source, the tools, or the world.",
    definition:
      "Hallucinations are plausible inventions: fake citations, invented APIs, or details that were not in the document. They are a consequence of training a model to continue text, not of a database lookup.",
    inPractice:
      "Require citations that your code can resolve, or constrain the model to quote retrieved text. A disclaimer in the UI does not catch a wrong number.",
    resources: [
      r("Retrieval-Augmented Generation", "https://arxiv.org/abs/2005.11430", "arXiv"),
      r("Prompt engineering guide", "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/", "Lilian Weng"),
    ],
    related: ["rag", "ground-truth"],
  },
  {
    slug: "hyperparameter",
    name: "Hyperparameter",
    letter: "H",
    aliases: ["hyper-parameter", "training knob"],
    category: "Training",
    level: "foundational",
    summary: "A setting you choose before training, rather than a weight the training loop learns.",
    definition:
      "Learning rate, batch size, number of layers, and dropout rate are hyperparameters. They shape the optimization but are not updated by backpropagation.",
    inPractice:
      "Change one at a time until you know the landscape. A grid search on a huge model is a way to spend a budget, not a way to learn.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
    ],
    related: ["learning-rate", "batch-size"],
  },
  {
    slug: "hidden-layer",
    name: "Hidden Layer",
    letter: "H",
    aliases: ["hidden unit"],
    category: "Models",
    level: "foundational",
    summary: "A layer of units between the input and the output, where the learned features live.",
    definition:
      "Hidden layers are hidden because you do not supervise them directly. Their activations become the representation the next layer reads. Depth is a count of these layers.",
    inPractice:
      "Wider hidden layers memorize more; deeper ones can compose more. For a first model, copy a known width instead of inventing one.",
    resources: [
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
      r("Multilayer perceptrons", "https://d2l.ai/chapter_multilayer-perceptrons/index.html", "Dive into Deep Learning"),
    ],
    related: ["multilayer-perceptron", "activation-function"],
  },
  {
    slug: "human-in-the-loop",
    name: "Human in the Loop",
    letter: "H",
    aliases: ["HITL"],
    category: "Agents",
    level: "foundational",
    summary: "A person who reviews, corrects, or approves a model’s action before it counts.",
    definition:
      "Human-in-the-loop design puts a person where the cost of a mistake is high or the model’s confidence is low. The person is part of the system, with a queue, a deadline, and a way for their correction to become training data.",
    inPractice:
      "If the reviewer approves everything, you do not have a loop. Sample their disagreements and feed them back into the evaluation set.",
    resources: [
      r("Training language models to follow instructions with human feedback", "https://arxiv.org/abs/2203.02155", "arXiv"),
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
    ],
    related: ["rlhf", "evaluation"],
  },
  {
    slug: "hnsw",
    name: "HNSW",
    letter: "H",
    aliases: ["hierarchical navigable small world"],
    category: "Systems",
    level: "advanced",
    summary: "A graph index for approximate nearest-neighbor search over embeddings.",
    definition:
      "HNSW builds a layered graph of vectors so a query can walk toward nearby points without scanning the whole set. It is the default index inside many vector databases, trading a little recall for a large speedup.",
    inPractice:
      "Measure recall of the index against a brute-force scan on a sample. A fast index that misses the right document looks like a bad embedding model.",
    resources: [
      r("Efficient and robust approximate nearest neighbor search using HNSW", "https://arxiv.org/abs/1603.09320", "arXiv"),
      r("Retrieval-augmented generation", "https://www.pinecone.io/learn/retrieval-augmented-generation/", "Pinecone"),
    ],
    related: ["vector-database", "semantic-search"],
  },
  {
    slug: "human-feedback",
    name: "Human Feedback",
    letter: "H",
    aliases: ["preference data", "human preferences"],
    category: "Training",
    level: "intermediate",
    summary: "Judgments from people, usually rankings of two answers, used to steer a model.",
    definition:
      "Human feedback is the dataset behind RLHF and DPO: raters say which completion they prefer, often with a rubric. The model then learns that preference, including the raters’ biases and shortcuts.",
    inPractice:
      "Write the rubric down and audit a slice of labels. If raters reward length or politeness, the model will too.",
    resources: [
      r("InstructGPT", "https://arxiv.org/abs/2203.02155", "arXiv"),
      r("Direct Preference Optimization", "https://arxiv.org/abs/2305.18290", "arXiv"),
    ],
    related: ["rlhf", "dpo"],
  },
  {
    slug: "heuristic",
    name: "Heuristic",
    letter: "H",
    aliases: ["rule of thumb"],
    category: "Foundations",
    level: "foundational",
    summary: "A cheap rule that is often right and not guaranteed to be.",
    definition:
      "Heuristics are hand-written shortcuts: a regex, a threshold, a beam width chosen because it worked last time. They are fast, explainable, and brittle outside the cases the author imagined.",
    inPractice:
      "Ship a heuristic baseline before a model. If the model cannot beat it on the metric you care about, you do not need the model yet.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["baseline", "classifier"],
  },
  {
    slug: "hinge-loss",
    name: "Hinge Loss",
    letter: "H",
    aliases: ["SVM loss"],
    category: "Training",
    level: "intermediate",
    summary: "A loss that pushes the correct class to win by a margin, and ignores cases that already do.",
    definition:
      "Hinge loss is zero when the true class outscores the others by at least a set margin, and linear in how far short it falls otherwise. Support vector machines made it famous; modern nets more often use cross-entropy.",
    inPractice:
      "Use hinge loss when you want a hard margin and a simple linear model. For deep classifiers, cross-entropy is the default for a reason: it gives a gradient even on confident mistakes.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["loss-function", "classifier"],
  },
  {
    slug: "hybrid-search",
    name: "Hybrid Search",
    letter: "H",
    aliases: ["keyword plus vector search"],
    category: "Language",
    level: "intermediate",
    summary: "Combining lexical keyword search with embedding search so both exact strings and paraphrases can hit.",
    definition:
      "Keyword search wins on names, error codes, and rare tokens. Vector search wins on meaning. Hybrid search runs both and merges the ranked lists, usually with a weighted sum or a reciprocal-rank fusion.",
    inPractice:
      "If users paste IDs and also ask vague questions, hybrid search beats either method alone. Tune the mix on your own queries.",
    resources: [
      r("Retrieval-augmented generation", "https://www.pinecone.io/learn/retrieval-augmented-generation/", "Pinecone"),
      r("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "https://arxiv.org/abs/2005.11430", "arXiv"),
    ],
    related: ["semantic-search", "rag"],
  },
  {
    slug: "hard-negative",
    name: "Hard Negative",
    letter: "H",
    aliases: ["hard negative mining"],
    category: "Training",
    level: "advanced",
    summary: "A wrong example that looks so similar to the right one that the model currently confuses them.",
    definition:
      "Easy negatives teach almost nothing because the model already ranks them last. Hard negatives — a near-miss document, a lookalike class — produce a gradient and teach the boundary.",
    inPractice:
      "Mine hard negatives from the model’s own top misses, then add them to the next training round. Random negatives stop helping once retrieval is decent.",
    resources: [
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
      r("Learning Transferable Visual Models From Natural Language Supervision", "https://arxiv.org/abs/2103.00020", "arXiv"),
    ],
    related: ["embedding", "contrastive-learning"],
  },
];
