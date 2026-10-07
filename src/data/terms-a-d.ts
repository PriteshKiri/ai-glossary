import type { Term } from "./types";

const r = (title: string, url: string, source: string) => ({ title, url, source });

export const termsAD: Term[] = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    letter: "A",
    aliases: ["AI"],
    category: "Foundations",
    level: "foundational",
    summary: "Systems built to do tasks that usually take human judgment, from sorting mail to writing code.",
    definition:
      "Artificial intelligence is the field that builds software able to perceive, predict, generate, or decide. The name covers narrow tools trained for one job and broader systems that handle many jobs from the same model.",
    inPractice:
      "Say which capability you mean — a classifier, a language model, a planner — because “AI” alone is too wide to design or evaluate against.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["machine-learning", "deep-learning"],
  },
  {
    slug: "agent",
    name: "Agent",
    letter: "A",
    aliases: ["AI agent", "autonomous agent"],
    category: "Agents",
    level: "intermediate",
    summary: "A model in a loop: it picks an action, uses a tool, looks at the result, and continues.",
    definition:
      "An agent gives a model a goal and a set of tools, then lets it choose the next step from what it just observed. The model supplies judgment; search, code, or a browser supplies reach it does not have on its own.",
    inPractice:
      "Start with a short tool list, log every action, and require a person to approve anything that spends money or changes live systems.",
    resources: [
      r("LLM Powered Autonomous Agents", "https://lilianweng.github.io/posts/2023-06-23-agent/", "Lilian Weng"),
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
    ],
    related: ["tool-use", "orchestration"],
  },
  {
    slug: "agi",
    name: "AGI",
    letter: "A",
    aliases: ["artificial general intelligence"],
    category: "Foundations",
    level: "advanced",
    summary: "A hoped-for system that can learn new intellectual tasks about as well as a person can.",
    definition:
      "Artificial general intelligence is a research target, not a product you can buy: a system that transfers skill across very different problems without a new training run for each one. People disagree on the bar, which is why the label shows up in strategy talks more than in benchmarks.",
    inPractice:
      "Treat vendor claims of AGI as marketing until you can point to tasks, failure cases, and an evaluation that was fixed before the run.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["artificial-intelligence", "foundation-model"],
  },
  {
    slug: "alignment",
    name: "Alignment",
    letter: "A",
    aliases: ["AI alignment"],
    category: "Safety",
    level: "intermediate",
    summary: "The work of making a model pursue what people actually want, including the constraints they did not spell out.",
    definition:
      "Alignment is the gap between a model that scores well on its training objective and a model that behaves acceptably for the people who use it. Methods include human feedback, written constitutions, and evaluations that look for harmful or off-task behavior.",
    inPractice:
      "Write the behavior you care about as tests — refusals, tone, tool limits — and run them whenever the model or the prompt changes.",
    resources: [
      r("Training language models to follow instructions with human feedback", "https://arxiv.org/abs/2203.02155", "arXiv"),
      r("Constitutional AI", "https://arxiv.org/abs/2212.08073", "arXiv"),
    ],
    related: ["rlhf", "constitutional-ai"],
  },
  {
    slug: "attention",
    name: "Attention",
    letter: "A",
    aliases: ["attention mechanism"],
    category: "Models",
    level: "intermediate",
    summary: "A way for each token to look at the others and pull in the ones that matter for its next representation.",
    definition:
      "Attention compares a query against keys and returns a weighted mix of values. In a transformer this replaces recurrence: every position can read the rest of the sequence in one step, which is why long-range dependencies became practical.",
    inPractice:
      "When a model ignores a detail buried in a long prompt, you are watching attention spend its budget on other tokens. Move the detail, or shorten the context.",
    resources: [
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["self-attention", "transformer"],
  },
  {
    slug: "autoregressive-model",
    name: "Autoregressive Model",
    letter: "A",
    aliases: ["next-token prediction"],
    category: "Models",
    level: "intermediate",
    summary: "A model that builds an output one piece at a time, each piece conditioned on everything already produced.",
    definition:
      "Autoregressive language models estimate the next token from the prefix, then append it and repeat. The same idea shows up in older sequence models and in image generators that paint one patch after another.",
    inPractice:
      "Decoding is sequential, so latency grows with output length. Speculative decoding and shorter answers are the usual ways to claw that time back.",
    resources: [
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["language-model", "token"],
  },
  {
    slug: "activation-function",
    name: "Activation Function",
    letter: "A",
    aliases: ["ReLU", "nonlinearity", "GELU"],
    category: "Models",
    level: "foundational",
    summary: "The nonlinearity after a layer that lets a network represent curves, not just weighted sums.",
    definition:
      "Without an activation, stacking linear layers still collapses into one linear map. ReLU, GELU, and sigmoid bend that map so the network can separate classes and fit functions that are not straight lines.",
    inPractice:
      "GELU is the default in most transformers. If you are debugging a custom layer, check that an activation is actually in the path before you blame the optimizer.",
    resources: [
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
      r("Multilayer perceptrons", "https://d2l.ai/chapter_multilayer-perceptrons/index.html", "Dive into Deep Learning"),
    ],
    related: ["neural-network", "multilayer-perceptron"],
  },
  {
    slug: "adam-optimizer",
    name: "Adam",
    letter: "A",
    aliases: ["Adam optimizer", "AdamW"],
    category: "Training",
    level: "intermediate",
    summary: "An optimizer that keeps a running average of gradients and of their squares, then steps further where the signal is steady.",
    definition:
      "Adam adapts the learning rate per parameter. AdamW is the variant used for most language models: it decouples weight decay from the adaptive step so regularization behaves the way people expect.",
    inPractice:
      "If loss oscillates, lower the learning rate before you swap optimizers. Adam hides a bad rate for a while, then diverges.",
    resources: [
      r("Adam: A Method for Stochastic Optimization", "https://arxiv.org/abs/1412.6980", "arXiv"),
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
    ],
    related: ["optimizer", "learning-rate"],
  },
  {
    slug: "adversarial-example",
    name: "Adversarial Example",
    letter: "A",
    aliases: ["adversarial attack"],
    category: "Safety",
    level: "advanced",
    summary: "An input changed just enough to fool a model while looking almost unchanged to a person.",
    definition:
      "Adversarial examples exploit directions the model is sensitive to and people are not. A few pixels, or a short suffix on a prompt, can flip a prediction or walk past a safety check.",
    inPractice:
      "Defenses that only filter known attack strings fail on the next variant. Test behavior on paraphrases and on tool outputs, not on one blocklist.",
    resources: [
      r("Deep Learning — regularization", "https://www.deeplearningbook.org/contents/regularization.html", "Goodfellow, Bengio, Courville"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["jailbreak", "robustness"],
  },
  {
    slug: "artificial-neural-network",
    name: "Artificial Neural Network",
    letter: "A",
    aliases: ["ANN", "neural net"],
    category: "Models",
    level: "foundational",
    summary: "Layers of simple units that learn a function by adjusting connection weights.",
    definition:
      "Each unit computes a weighted sum and passes it through an activation. Depth lets later layers build on features the earlier layers discovered, which is the whole bet of deep learning.",
    inPractice:
      "Sketch the tensor shapes before you write the module. Most training bugs are a rank or a batch dimension, not the idea of the network.",
    resources: [
      r("Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "Andrej Karpathy"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["neural-network", "deep-learning"],
  },
  {
    slug: "backpropagation",
    name: "Backpropagation",
    letter: "B",
    aliases: ["backprop", "reverse-mode differentiation"],
    category: "Training",
    level: "foundational",
    summary: "The algorithm that assigns each weight a share of the blame for the loss.",
    definition:
      "Backpropagation applies the chain rule from the loss backward through the graph, producing a gradient for every parameter. Frameworks do this automatically; you still need the graph to be differentiable where you expect a signal.",
    inPractice:
      "A detached tensor or an in-place op that breaks the graph shows up as a gradient that is missing or zero. Print which parameters received a gradient.",
    resources: [
      r("Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "Andrej Karpathy"),
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["gradient", "loss-function"],
  },
  {
    slug: "batch-size",
    name: "Batch Size",
    letter: "B",
    aliases: ["minibatch"],
    category: "Training",
    level: "foundational",
    summary: "How many examples the model sees before it takes one optimizer step.",
    definition:
      "A larger batch estimates the gradient more smoothly and uses hardware more fully. A smaller batch is noisier, which sometimes helps generalization and always uses less memory.",
    inPractice:
      "If you raise the batch size, raise the learning rate more slowly than the batch, and watch for a sudden jump in loss. Memory, not theory, usually sets the ceiling.",
    resources: [
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["epoch", "stochastic-gradient-descent"],
  },
  {
    slug: "batch-normalization",
    name: "Batch Normalization",
    letter: "B",
    aliases: ["batch norm", "BatchNorm"],
    category: "Training",
    level: "intermediate",
    summary: "A layer that rescales activations inside a batch so the next layer sees a steady distribution.",
    definition:
      "Batch norm subtracts the batch mean and divides by the batch standard deviation, then learns a shift and scale. It made very deep convolutional nets trainable; transformers more often use layer norm instead, because their batches are small and sequences vary.",
    inPractice:
      "Do not copy batch norm into a transformer block out of habit. Check which norm the architecture was designed with.",
    resources: [
      r("Batch Normalization", "https://arxiv.org/abs/1502.03167", "arXiv"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["normalization", "convolutional-neural-network"],
  },
  {
    slug: "benchmark",
    name: "Benchmark",
    letter: "B",
    aliases: ["eval suite", "leaderboard"],
    category: "Evaluation",
    level: "foundational",
    summary: "A fixed set of tasks and scoring rules used to compare models.",
    definition:
      "A benchmark freezes the questions, the metric, and ideally the harness so a higher number means something. Once a benchmark is public and models are trained on lookalikes, the number saturates and stops measuring the original skill.",
    inPractice:
      "Keep a private set of examples from your own traffic. Public leaderboards are a starting point, not the acceptance test for your product.",
    resources: [
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["evaluation", "metric"],
  },
  {
    slug: "bert",
    name: "BERT",
    letter: "B",
    aliases: ["bidirectional encoder representations"],
    category: "Language",
    level: "intermediate",
    summary: "An encoder model trained to fill in missing words, widely used for classification and search.",
    definition:
      "BERT reads the whole sequence at once and learns from a masked-word objective plus a next-sentence task. It is not a chat model; it produces vectors you fine-tune for labeling, retrieval, or question answering.",
    inPractice:
      "Use BERT-style encoders when you need embeddings or a classifier. Use a decoder model when you need the system to write.",
    resources: [
      r("BERT", "https://arxiv.org/abs/1810.04805", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["masked-language-model", "encoder"],
  },
  {
    slug: "bias",
    name: "Bias",
    letter: "B",
    aliases: ["algorithmic bias", "model bias"],
    category: "Safety",
    level: "foundational",
    summary: "A systematic skew in predictions, as opposed to random error — and also the name of an additive weight in a neuron.",
    definition:
      "In fairness, bias means errors that fall harder on some groups or topics because of the data, the objective, or the product around the model. In a layer, bias is simply the constant added before the activation. The two uses meet when that constant and the data both lean the same way.",
    inPractice:
      "Slice error rates by the groups you can be held accountable for. An average score will hide a failure that only shows up in one slice.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Fairness overview", "https://developers.google.com/machine-learning/crash-course/fairness", "Google"),
    ],
    related: ["fairness", "evaluation"],
  },
  {
    slug: "bleu",
    name: "BLEU",
    letter: "B",
    aliases: ["bilingual evaluation understudy"],
    category: "Evaluation",
    level: "intermediate",
    summary: "A translation score that counts how many short phrases in the output also appear in a human reference.",
    definition:
      "BLEU averages n-gram overlap with reference translations and penalizes outputs that are too short. It is cheap and reproducible, and it misses meaning that was paraphrased rather than copied.",
    inPractice:
      "Do not use BLEU to judge a chatbot. It assumes a reference phrasing. Prefer task success, or a human rubric, for open-ended text.",
    resources: [
      r("BLEU", "https://aclanthology.org/P02-1040/", "ACL Anthology"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["metric", "evaluation"],
  },
  {
    slug: "beam-search",
    name: "Beam Search",
    letter: "B",
    aliases: ["beam decoding"],
    category: "Language",
    level: "advanced",
    summary: "A decoder that keeps several candidate sentences alive instead of always taking the single best next word.",
    definition:
      "At each step beam search expands every surviving hypothesis and keeps the top few by total score. It often beats greedy decoding on translation and can make chat models sound repetitive if the beam is wide.",
    inPractice:
      "For conversational models, sampling with a temperature is usually a better default than beam search. Save beams for tasks with one right shape, like speech or translation.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["sampling", "greedy-decoding"],
  },
  {
    slug: "byte-pair-encoding",
    name: "Byte-Pair Encoding",
    letter: "B",
    aliases: ["BPE"],
    category: "Language",
    level: "intermediate",
    summary: "A tokenizer that starts from characters and repeatedly merges the pair that appears most often.",
    definition:
      "BPE builds a vocabulary of subwords so common words stay intact and rare words fall back to pieces. GPT-style models use a byte-level variant so any string can be encoded without an unknown-token bucket.",
    inPractice:
      "Count tokens, not words, when you budget a context window. A language with a different script can cost several times more tokens than English for the same sentence.",
    resources: [
      r("Neural Machine Translation of Rare Words with Subword Units", "https://arxiv.org/abs/1508.07909", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["tokenizer", "vocabulary"],
  },
  {
    slug: "bayesian-inference",
    name: "Bayesian Inference",
    letter: "B",
    aliases: ["Bayes", "posterior"],
    category: "Foundations",
    level: "advanced",
    summary: "Updating a belief about parameters as evidence arrives, instead of returning one best-fit point.",
    definition:
      "Bayes’ rule combines a prior with the likelihood of the data to produce a posterior. In machine learning this shows up as a way to talk about uncertainty, and as the justification for many regularizers.",
    inPractice:
      "Full posteriors are expensive at model scale. If you need a confidence signal, start with ensembles or sampling the token distribution before you reach for a Bayesian neural net.",
    resources: [
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["uncertainty-estimation", "prior"],
  },
  {
    slug: "chain-of-thought",
    name: "Chain of Thought",
    letter: "C",
    aliases: ["CoT", "reasoning trace"],
    category: "Language",
    level: "intermediate",
    summary: "Prompting a model to write intermediate steps before the final answer.",
    definition:
      "Chain-of-thought asks the model to show its work. On arithmetic, logic, and multi-hop questions the extra tokens often raise accuracy, because the model conditions each step on the text it just wrote.",
    inPractice:
      "A fluent trace can still be wrong. Grade the answer, and spot-check the steps, especially if you show the trace to a user.",
    resources: [
      r("Chain-of-Thought Prompting", "https://arxiv.org/abs/2201.11903", "arXiv"),
      r("Prompt engineering guide", "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/", "Lilian Weng"),
    ],
    related: ["prompt", "tree-of-thought"],
  },
  {
    slug: "context-window",
    name: "Context Window",
    letter: "C",
    aliases: ["context length", "max tokens"],
    category: "Language",
    level: "foundational",
    summary: "The maximum number of tokens a model can read and write in one pass.",
    definition:
      "The context window holds the prompt, the retrieved notes, the conversation, and the answer the model is still generating. Anything past the limit is dropped or summarized, whether or not it was important.",
    inPractice:
      "Put instructions and the question at the edges of long contexts. Models attend unevenly, and the middle of a huge prompt is the easiest place to lose a fact.",
    resources: [
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["token", "long-context"],
  },
  {
    slug: "convolutional-neural-network",
    name: "Convolutional Neural Network",
    letter: "C",
    aliases: ["CNN", "convnet"],
    category: "Multimodal",
    level: "foundational",
    summary: "A vision model that slides small filters across an image and reuses them everywhere.",
    definition:
      "Convolution shares weights across space, so the net looks for the same edge or texture in every region. Pooling and stacking build from edges to parts to objects. Transformers now compete with convnets, but the inductive bias is still the right tool for many vision jobs.",
    inPractice:
      "If your images are small and your data is limited, a convnet is often easier to train than a vision transformer.",
    resources: [
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
      r("Deep Learning — convnets", "https://www.deeplearningbook.org/contents/convnets.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["vision-transformer", "inductive-bias"],
  },
  {
    slug: "clip",
    name: "CLIP",
    letter: "C",
    aliases: ["contrastive language-image pretraining"],
    category: "Multimodal",
    level: "intermediate",
    summary: "A pair of encoders trained so that a photo and its caption land near each other in one vector space.",
    definition:
      "CLIP learns from image–text pairs with a contrastive loss: matching pairs should score higher than random pairs. The result can classify an image with text labels it was never explicitly trained on, and it is the usual front door for text-to-image models.",
    inPractice:
      "Write labels the way captions are written. “A photo of a husky” beats the bare word “husky” because that is the style CLIP saw.",
    resources: [
      r("Learning Transferable Visual Models From Natural Language Supervision", "https://arxiv.org/abs/2103.00020", "arXiv"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["embedding", "vision-language-model"],
  },
  {
    slug: "cross-entropy",
    name: "Cross-Entropy",
    letter: "C",
    aliases: ["log loss"],
    category: "Training",
    level: "foundational",
    summary: "The standard loss for classification: it punishes confident wrong answers more than hesitant ones.",
    definition:
      "Cross-entropy measures how many extra bits you need if you encode events with the model’s probabilities instead of the true ones. For next-token training the “true” distribution is a single correct token, so the loss is just the negative log probability of that token.",
    inPractice:
      "A loss near the log of the vocabulary size means the model is still guessing uniformly. That is a useful sanity check at the start of training.",
    resources: [
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["loss-function", "softmax"],
  },
  {
    slug: "constitutional-ai",
    name: "Constitutional AI",
    letter: "C",
    aliases: ["CAI", "RLAIF"],
    category: "Safety",
    level: "advanced",
    summary: "Training a model to critique and revise its own answers against a written list of principles.",
    definition:
      "Constitutional AI replaces some human preference labels with a constitution: short principles the model uses to judge a draft and write a better one. Those judgments then train a preference model, so the constitution scales further than a labeling team.",
    inPractice:
      "Principles only help if they are specific enough to change a draft. “Be helpful and harmless” is a slogan; “do not provide working exploit code” is a rule you can test.",
    resources: [
      r("Constitutional AI", "https://arxiv.org/abs/2212.08073", "arXiv"),
      r("Prompt engineering", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", "Anthropic"),
    ],
    related: ["alignment", "rlhf"],
  },
  {
    slug: "classifier",
    name: "Classifier",
    letter: "C",
    aliases: ["classification model"],
    category: "Models",
    level: "foundational",
    summary: "A model that assigns an input to one of a fixed set of categories.",
    definition:
      "Classifiers map inputs to labels: spam or not, a disease code, an intent. The output is a distribution over classes via softmax, and the usual loss is cross-entropy against the correct label.",
    inPractice:
      "If the classes are badly unbalanced, accuracy will flatter a model that always predicts the common class. Report recall on the rare class.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["precision", "recall"],
  },
  {
    slug: "clustering",
    name: "Clustering",
    letter: "C",
    aliases: ["unsupervised clustering"],
    category: "Models",
    level: "foundational",
    summary: "Grouping examples by similarity when you do not have labels.",
    definition:
      "Clustering searches for a partition that puts similar points together. k-means uses distance to centroids; other methods use density or a hierarchy. The groups are a hypothesis, not a ground truth, until a person checks them.",
    inPractice:
      "Run clustering on embeddings to see if your categories are real. If the clusters do not match the labels you planned, the labels may be the problem.",
    resources: [
      r("Clustering", "https://scikit-learn.org/stable/modules/clustering.html", "scikit-learn"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["k-means", "unsupervised-learning"],
  },
  {
    slug: "catastrophic-forgetting",
    name: "Catastrophic Forgetting",
    letter: "C",
    aliases: ["catastrophic interference"],
    category: "Training",
    level: "advanced",
    summary: "When learning a new task wipes out performance on an older one.",
    definition:
      "Neural nets share weights across tasks, so a fine-tune on new data can overwrite features the previous task needed. The loss on the old task is not in the new objective, so nothing pushes back.",
    inPractice:
      "Mix in a slice of the original data, or freeze the base and train a small adapter. Check the old evaluation after every fine-tune, not only the new one.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["fine-tuning", "transfer-learning"],
  },
  {
    slug: "cuda",
    name: "CUDA",
    letter: "C",
    aliases: ["NVIDIA CUDA"],
    category: "Systems",
    level: "intermediate",
    summary: "NVIDIA’s platform for running numerical code on GPUs.",
    definition:
      "CUDA is the software stack that lets frameworks schedule matrix math on NVIDIA GPUs. PyTorch and most training jobs sit on top of it, which is why a CUDA and driver mismatch is a classic first-day failure.",
    inPractice:
      "Match the PyTorch build to the CUDA version on the machine. “Works on my laptop” usually means the laptop was CPU-only.",
    resources: [
      r("CUDA Zone", "https://developer.nvidia.com/cuda-zone", "NVIDIA"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["gpu", "vram"],
  },
  {
    slug: "deep-learning",
    name: "Deep Learning",
    letter: "D",
    aliases: ["DL"],
    category: "Foundations",
    level: "foundational",
    summary: "Machine learning with neural networks that have many layers, trained on large amounts of data.",
    definition:
      "Deep learning learns the features and the predictor together, instead of asking a person to design the features first. Depth, data, and compute are the three levers; take one away and the results fall off sharply.",
    inPractice:
      "Do not start with a deep model if a linear one or a boosted tree already solves the job. Use depth when the raw input — pixels, audio, tokens — is what you have.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["machine-learning", "neural-network"],
  },
  {
    slug: "diffusion-model",
    name: "Diffusion Model",
    letter: "D",
    aliases: ["DDPM", "denoising diffusion"],
    category: "Models",
    level: "intermediate",
    summary: "A generator that learns to reverse a process of gradually adding noise.",
    definition:
      "Training corrupts examples with noise over many steps. The model learns to remove a little noise at each step, and sampling runs that removal from pure noise back to an image, audio clip, or other object.",
    inPractice:
      "More denoising steps usually look better and cost more. Latent diffusion runs the process in a compressed space so the bill stays reasonable.",
    resources: [
      r("Denoising Diffusion Probabilistic Models", "https://arxiv.org/abs/2006.11239", "arXiv"),
      r("The Illustrated Stable Diffusion", "https://jalammar.github.io/illustrated-stable-diffusion/", "Jay Alammar"),
    ],
    related: ["generative-ai", "latent-diffusion"],
  },
  {
    slug: "dropout",
    name: "Dropout",
    letter: "D",
    aliases: ["dropout regularization"],
    category: "Training",
    level: "foundational",
    summary: "Randomly turning units off during training so the network cannot rely on any one of them.",
    definition:
      "Dropout masks a fraction of activations on each step and scales the rest. At inference the full network runs. The effect is close to training an ensemble of thinner networks that share weights.",
    inPractice:
      "Leave dropout off at evaluation time. A model that looks weak only in eval is often still dropping units.",
    resources: [
      r("Dropout: A Simple Way to Prevent Neural Networks from Overfitting", "https://jmlr.org/papers/v15/srivastava14a.html", "JMLR"),
      r("Deep Learning — regularization", "https://www.deeplearningbook.org/contents/regularization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["regularization", "overfitting"],
  },
  {
    slug: "dpo",
    name: "DPO",
    letter: "D",
    aliases: ["direct preference optimization"],
    category: "Training",
    level: "advanced",
    summary: "A way to train on human preferences without a separate reward model and reinforcement-learning loop.",
    definition:
      "Direct preference optimization treats a pair — a preferred answer and a rejected one — as a classification problem on the policy itself. You get much of what RLHF was aiming at with a simpler training job.",
    inPractice:
      "Preference data quality dominates the algorithm. If the “preferred” answer is only longer, DPO will teach the model to ramble.",
    resources: [
      r("Direct Preference Optimization", "https://arxiv.org/abs/2305.18290", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["rlhf", "reward-model"],
  },
  {
    slug: "dataset",
    name: "Dataset",
    letter: "D",
    aliases: ["training set", "corpus"],
    category: "Data",
    level: "foundational",
    summary: "The examples a model learns from, plus the labels or structure attached to them.",
    definition:
      "A dataset is the frozen collection you train, validate, and test on. Its coverage, errors, and licenses set a ceiling the architecture cannot climb past.",
    inPractice:
      "Write down where every split came from before you train. Leakage between train and test is the most common way to ship a number you cannot reproduce.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["label", "validation-set"],
  },
  {
    slug: "decoder",
    name: "Decoder",
    letter: "D",
    aliases: ["decoder-only", "autoregressive decoder"],
    category: "Models",
    level: "intermediate",
    summary: "The part of a model that generates outputs, often one token at a time, attending only to the past.",
    definition:
      "In a sequence-to-sequence net the decoder turns an encoded input into a target sequence. In GPT-style models the whole network is a decoder: a stack of masked self-attention blocks trained to predict the next token.",
    inPractice:
      "Pick a decoder-only model for generation and an encoder for embedding or classification. The architecture is the product decision.",
    resources: [
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
    ],
    related: ["encoder", "autoregressive-model"],
  },
  {
    slug: "data-augmentation",
    name: "Data Augmentation",
    letter: "D",
    aliases: ["augmentation"],
    category: "Data",
    level: "foundational",
    summary: "Creating extra training examples by transforming real ones in ways that should not change the label.",
    definition:
      "Crops, flips, noise, and paraphrases expand a small set and teach the model to ignore irrelevant variation. The transformation has to preserve the answer; a flip is fine for a cat and fatal for a street sign that says left.",
    inPractice:
      "Augment the training split only. Augmented copies in the test set inflate the score.",
    resources: [
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["dataset", "overfitting"],
  },
  {
    slug: "data-drift",
    name: "Data Drift",
    letter: "D",
    aliases: ["dataset shift", "covariate shift"],
    category: "Data",
    level: "intermediate",
    summary: "When live inputs stop looking like the data the model was trained on.",
    definition:
      "Drift is a change in the input distribution, the label distribution, or the relationship between them. The model keeps answering, often with the same confidence, while its error rate quietly rises.",
    inPractice:
      "Log a sample of production inputs and compare simple statistics to training. A drift alert is a reason to re-evaluate, not automatically a reason to retrain.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["out-of-distribution", "evaluation"],
  },
  {
    slug: "dimensionality-reduction",
    name: "Dimensionality Reduction",
    letter: "D",
    aliases: ["PCA", "embedding projection"],
    category: "Data",
    level: "intermediate",
    summary: "Compressing a high-dimensional vector into fewer numbers while keeping the structure you care about.",
    definition:
      "Methods like PCA find directions of high variance so you can plot or denoise data. For neural embeddings, a random projection or UMAP is often only a viewing tool; the model still uses the full vector.",
    inPractice:
      "Do not ship a 2D projection as the feature the model sees. Use the projection to look, and the original embedding to retrieve.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Deep Learning — linear algebra", "https://www.deeplearningbook.org/contents/linear_algebra.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["embedding", "representation"],
  },
  {
    slug: "dqn",
    name: "DQN",
    letter: "D",
    aliases: ["deep Q-network"],
    category: "Training",
    level: "advanced",
    summary: "Q-learning with a neural network as the action-value function, plus a few tricks that keep it stable.",
    definition:
      "DQN approximates the Q-function with a deep net and trains it on transitions stored in a replay buffer. A second, slower target network stops the regression target from chasing the network that is learning it.",
    inPractice:
      "DQN fits discrete actions. For continuous control, look at policy-gradient methods such as PPO instead of forcing actions into bins.",
    resources: [
      r("Playing Atari with Deep Reinforcement Learning", "https://arxiv.org/abs/1312.5602", "arXiv"),
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
    ],
    related: ["q-learning", "reinforcement-learning"],
  },
];
