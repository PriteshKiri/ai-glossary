import type { Term } from "./types";

const r = (title: string, url: string, source: string) => ({ title, url, source });

export const termsIL: Term[] = [
  {
    slug: "inference",
    name: "Inference",
    letter: "I",
    aliases: ["serving", "prediction"],
    category: "Systems",
    level: "foundational",
    summary: "Running a trained model on new inputs to get an output.",
    definition:
      "Inference is the forward pass in production: no weight updates, often a smaller numeric format, and a latency budget a training job never had. The same checkpoint can be cheap or expensive depending on batching, caching, and how many tokens you generate.",
    inPractice:
      "Measure time to first token and time per output token separately. Users feel the first; your bill feels both.",
    resources: [
      r("vLLM documentation", "https://docs.vllm.ai/en/latest/", "vLLM"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["training", "kv-cache"],
  },
  {
    slug: "in-context-learning",
    name: "In-Context Learning",
    letter: "I",
    aliases: ["ICL"],
    category: "Language",
    level: "intermediate",
    summary: "A model picking up a pattern from examples inside the prompt, without a weight update.",
    definition:
      "In-context learning is what few-shot prompts rely on. The model conditions on the demonstrations and continues in the same form. It is not training, and it disappears when the examples leave the window.",
    inPractice:
      "If the pattern is stable and high-volume, fine-tune. In-context examples are the right tool when the task changes faster than you can retrain.",
    resources: [
      r("Language Models are Few-Shot Learners", "https://arxiv.org/abs/2005.14165", "arXiv"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["few-shot-learning", "prompt"],
  },
  {
    slug: "instruction-tuning",
    name: "Instruction Tuning",
    letter: "I",
    aliases: ["instruction fine-tuning", "SFT"],
    category: "Training",
    level: "intermediate",
    summary: "Fine-tuning a base model on examples of instructions paired with good responses.",
    definition:
      "Instruction tuning teaches a completion model to treat the user’s text as a request. The data looks like tasks: answer this, rewrite that, follow this format. Preference training usually comes after, not instead.",
    inPractice:
      "Include the formats you will actually serve. A model tuned only on essays will fight you when you need a JSON tool call.",
    resources: [
      r("InstructGPT", "https://arxiv.org/abs/2203.02155", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["fine-tuning", "prompt"],
  },
  {
    slug: "interpretability",
    name: "Interpretability",
    letter: "I",
    aliases: ["interpretable model"],
    category: "Safety",
    level: "intermediate",
    summary: "How much of a model’s decision a person can follow from its structure, not from a story added later.",
    definition:
      "A linear model with a few features is interpretable because the weights are the explanation. A deep net usually is not. Interpretability is a property you design in, as opposed to an explanation method you bolt on.",
    inPractice:
      "If a regulator or a doctor must see why, start with a model whose weights you can read, and only add depth if that model fails the task.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["xai", "feature"],
  },
  {
    slug: "imitation-learning",
    name: "Imitation Learning",
    letter: "I",
    aliases: ["behavioral cloning"],
    category: "Training",
    level: "advanced",
    summary: "Learning a policy by copying expert demonstrations instead of optimizing a reward.",
    definition:
      "Imitation learning treats expert actions as labels. Behavioral cloning is the simple version: supervised learning from state to action. It fails when the learner drifts into states the expert never visited, because it has no idea how to recover.",
    inPractice:
      "Collect a few recoveries from those drifted states, or mix in a reward. Demonstrations alone teach the happy path.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["policy", "reinforcement-learning"],
  },
  {
    slug: "information-retrieval",
    name: "Information Retrieval",
    letter: "I",
    aliases: ["IR", "search"],
    category: "Language",
    level: "foundational",
    summary: "Finding the documents that are relevant to a query and ranking them.",
    definition:
      "Information retrieval is the field behind search boxes: indexing, scoring, and ranking. Neural retrievers and keyword engines are both IR systems. A language model that answers from those documents is a reader sitting on top.",
    inPractice:
      "Evaluate retrieval on its own, before you judge the answer. A perfect reader cannot quote a document you never fetched.",
    resources: [
      r("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "https://arxiv.org/abs/2005.11430", "arXiv"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["rag", "semantic-search"],
  },
  {
    slug: "inductive-bias",
    name: "Inductive Bias",
    letter: "I",
    aliases: ["learning bias"],
    category: "Foundations",
    level: "advanced",
    summary: "The assumptions a model family makes before it sees any data.",
    definition:
      "A convnet assumes nearby pixels matter and that a pattern can appear anywhere. A transformer assumes less and pays for that with data and compute. Inductive bias is what lets a model learn from a finite set instead of treating every input as unrelated.",
    inPractice:
      "If you have little data, pick the architecture whose assumptions match the problem. A generic large model is not free of bias; it learned its bias from someone else’s corpus.",
    resources: [
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["generalization", "convolutional-neural-network"],
  },
  {
    slug: "initialization",
    name: "Initialization",
    letter: "I",
    aliases: ["weight initialization"],
    category: "Training",
    level: "intermediate",
    summary: "The starting values of the weights, which decide whether training can move at all.",
    definition:
      "If weights start too large, activations explode. If they start too small, gradients vanish. Schemes such as Xavier and Kaiming set the scale from the layer sizes so a signal can cross the network at step zero.",
    inPractice:
      "Use the initializer that matches your activation. A custom layer with default zeros in the wrong place will sit still and look like a data bug.",
    resources: [
      r("Understanding the difficulty of training deep feedforward neural networks", "https://proceedings.mlr.press/v9/glorot10a.html", "PMLR"),
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["xavier-initialization", "weight"],
  },
  {
    slug: "inference-time-scaling",
    name: "Inference-Time Scaling",
    letter: "I",
    aliases: ["test-time compute"],
    category: "Systems",
    level: "advanced",
    summary: "Spending more compute while answering — more tokens, more samples — instead of only training a bigger model.",
    definition:
      "Inference-time scaling trades latency and money at request time for a better answer: longer reasoning traces, best-of-n samples, or a search over drafts. The model weights stay fixed.",
    inPractice:
      "Cap the extra budget. An open-ended “think longer” loop will fill the context window and the invoice without a stopping rule.",
    resources: [
      r("Chain-of-Thought Prompting", "https://arxiv.org/abs/2201.11903", "arXiv"),
      r("vLLM documentation", "https://docs.vllm.ai/en/latest/", "vLLM"),
    ],
    related: ["chain-of-thought", "inference"],
  },
  {
    slug: "intent-classification",
    name: "Intent Classification",
    letter: "I",
    aliases: ["intent detection"],
    category: "Language",
    level: "foundational",
    summary: "Labeling an utterance with what the user is trying to do.",
    definition:
      "Intent classification maps “where is my order” to a fixed action such as track_order. It is the front door of many assistants: a small classifier or a prompted model picks a route, and a specialized handler does the work.",
    inPractice:
      "Keep an out-of-scope intent. Forcing every message into a real action is how you book the wrong thing.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["classifier", "user-intent"],
  },
  {
    slug: "jailbreak",
    name: "Jailbreak",
    letter: "J",
    aliases: ["prompt injection attack", "safety bypass"],
    category: "Safety",
    level: "intermediate",
    summary: "A prompt written to make a model ignore its safety instructions.",
    definition:
      "Jailbreaks wrap a disallowed request in role-play, encoding, or a fake policy so the model treats it as allowed. They are an evaluation target and an abuse technique. A filter on a few famous strings is not a defense.",
    inPractice:
      "Test with a fresh set of attacks on every model change, and do not rely on the model to police its own tool calls.",
    resources: [
      r("Prompt engineering", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", "Anthropic"),
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
    ],
    related: ["guardrail", "adversarial-example"],
  },
  {
    slug: "jaccard-similarity",
    name: "Jaccard Similarity",
    letter: "J",
    aliases: ["Jaccard index", "IoU"],
    category: "Evaluation",
    level: "intermediate",
    summary: "The size of the overlap of two sets divided by the size of their union.",
    definition:
      "Jaccard similarity is 1 when two sets match and 0 when they share nothing. In vision the same ratio on pixel regions is called intersection over union, the standard score for whether a detector found the object.",
    inPractice:
      "Use it for sets and regions, not for graded text quality. Two sentences can mean the same thing and share few tokens.",
    resources: [
      r("Jaccard index", "https://en.wikipedia.org/wiki/Jaccard_index", "Wikipedia"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["object-detection", "evaluation"],
  },
  {
    slug: "jensen-shannon-divergence",
    name: "Jensen-Shannon Divergence",
    letter: "J",
    aliases: ["JS divergence", "JSD"],
    category: "Evaluation",
    level: "advanced",
    summary: "A symmetric measure of how different two probability distributions are.",
    definition:
      "Jensen-Shannon divergence averages the KL divergence of each distribution from their midpoint. Unlike KL it is symmetric and always finite, so it is a practical way to compare a model’s output distribution with a reference.",
    inPractice:
      "Use it when you care about the whole distribution, not a single correct token. Two models can share a top answer and still differ everywhere else.",
    resources: [
      r("Jensen–Shannon divergence", "https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence", "Wikipedia"),
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["kl-divergence", "softmax"],
  },
  {
    slug: "json-mode",
    name: "JSON Mode",
    letter: "J",
    aliases: ["structured output"],
    category: "Agents",
    level: "foundational",
    summary: "Asking a model to emit valid JSON so your code can parse it.",
    definition:
      "JSON mode constrains decoding so the text is syntactically valid JSON. A schema-aware variant also enforces field names and types. It does not make the values true; it makes them readable.",
    inPractice:
      "Validate the schema in your own code anyway. Then check the fields that matter against a tool or a database, not against the model’s confidence.",
    resources: [
      r("JSON mode", "https://platform.openai.com/docs/guides/json-mode", "OpenAI"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["function-calling", "guardrail"],
  },
  {
    slug: "joint-embedding",
    name: "Joint Embedding",
    letter: "J",
    aliases: ["joint embedding space"],
    category: "Multimodal",
    level: "advanced",
    summary: "Training two encoders so different views of the same thing land near each other.",
    definition:
      "A joint embedding space is shared by two modalities or two augmentations. CLIP does this for images and captions; other methods do it for two crops of one image. The training signal is agreement between views, not a class label.",
    inPractice:
      "Keep the two encoders paired at export time. An image tower from one checkpoint and a text tower from another do not live in the same space.",
    resources: [
      r("Learning Transferable Visual Models From Natural Language Supervision", "https://arxiv.org/abs/2103.00020", "arXiv"),
      r("Self-Supervised Learning from Images with JEPA", "https://arxiv.org/abs/2301.08243", "arXiv"),
    ],
    related: ["clip", "embedding"],
  },
  {
    slug: "jacobian",
    name: "Jacobian",
    letter: "J",
    aliases: ["Jacobian matrix"],
    category: "Training",
    level: "advanced",
    summary: "The matrix of every output’s derivative with respect to every input.",
    definition:
      "The Jacobian generalizes the gradient to vector-valued functions. Backpropagation computes a Jacobian-vector product without ever writing the full matrix, which is why training a large model is possible at all.",
    inPractice:
      "You rarely form the Jacobian explicitly. If a custom gradient is wrong, check the vector-Jacobian product against finite differences on a tiny input.",
    resources: [
      r("Deep Learning — numerical computation", "https://www.deeplearningbook.org/contents/numerical.html", "Goodfellow, Bengio, Courville"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["gradient", "backpropagation"],
  },
  {
    slug: "jittering",
    name: "Jittering",
    letter: "J",
    aliases: ["noise injection", "input jitter"],
    category: "Data",
    level: "intermediate",
    summary: "Adding small random noise to inputs so the model does not depend on exact values.",
    definition:
      "Jittering is a form of augmentation: pixels shift slightly, audio gets a little noise, or timestamps wobble. The label stays the same. The model learns to ignore variations you expect in the wild.",
    inPractice:
      "Match the noise to real sensor error. Arbitrary noise teaches the model to ignore a signal it actually needs.",
    resources: [
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["data-augmentation", "regularization"],
  },
  {
    slug: "joint-probability",
    name: "Joint Probability",
    letter: "J",
    aliases: ["joint distribution"],
    category: "Foundations",
    level: "intermediate",
    summary: "The probability of two or more events happening together.",
    definition:
      "A joint distribution assigns a probability to each combination of variables. Generative models are attempts to learn a joint (or a conditional sliced from one) so you can sample new combinations.",
    inPractice:
      "When you factor a joint into steps — next token given the past — write the factorization down. Bugs in autoregressive models are often a missing condition.",
    resources: [
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["autoregressive-model", "generative-ai"],
  },
  {
    slug: "junction-tree",
    name: "Junction Tree",
    letter: "J",
    aliases: ["clique tree"],
    category: "Models",
    level: "advanced",
    summary: "An algorithm that computes exact probabilities in a graphical model by passing messages on a tree of clusters.",
    definition:
      "The junction tree algorithm turns a graph into a tree of overlapping clusters and passes messages until every cluster agrees. It is exact, and it becomes intractable as those clusters grow, which is why large models use approximations.",
    inPractice:
      "Use it to understand inference in small probabilistic models. Do not expect it to scale to a modern neural net; that is a different computation.",
    resources: [
      r("Junction tree algorithm", "https://en.wikipedia.org/wiki/Junction_tree_algorithm", "Wikipedia"),
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["bayesian-inference", "inference"],
  },
  {
    slug: "just-in-time-compilation",
    name: "Just-in-Time Compilation",
    letter: "J",
    aliases: ["JIT", "torch.compile"],
    category: "Systems",
    level: "advanced",
    summary: "Compiling a model graph at runtime into faster kernels instead of running eager Python.",
    definition:
      "A JIT traces or captures the operations a model actually runs and fuses them into fewer GPU kernels. PyTorch’s compiler and XLA are the versions you meet in training and serving. The first call is slow; the later calls are the point.",
    inPractice:
      "Compile after the model and shapes have settled. Dynamic shapes and data-dependent control flow are where compilers fall back to eager mode and the speedup vanishes.",
    resources: [
      r("torch.compile tutorial", "https://pytorch.org/tutorials/intermediate/torch_compile_tutorial.html", "PyTorch"),
      r("OpenXLA", "https://openxla.org/xla", "OpenXLA"),
    ],
    related: ["xla", "gpu"],
  },
  {
    slug: "knowledge-distillation",
    name: "Knowledge Distillation",
    letter: "K",
    aliases: ["distillation", "teacher-student"],
    category: "Training",
    level: "intermediate",
    summary: "Training a smaller model to match the outputs of a larger one.",
    definition:
      "The teacher’s full probability distribution is a richer target than a single hard label. The student learns from those soft targets and can land close to the teacher’s behavior at a fraction of the serving cost.",
    inPractice:
      "Distill only after the teacher is good. A student faithfully copies a teacher’s bad habits, including confident errors.",
    resources: [
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
      r("Dive into Deep Learning", "https://d2l.ai/", "d2l.ai"),
    ],
    related: ["quantization", "inference"],
  },
  {
    slug: "kv-cache",
    name: "KV Cache",
    letter: "K",
    aliases: ["key-value cache"],
    category: "Systems",
    level: "advanced",
    summary: "Stored attention keys and values from earlier tokens so the model does not recompute them on every new token.",
    definition:
      "Autoregressive decoding would otherwise repeat the same attention work for the prefix. The KV cache keeps those tensors in GPU memory and appends one new position at a time. Long conversations are often memory-bound because of this cache, not because of the weights.",
    inPractice:
      "When a serving job runs out of memory mid-conversation, the cache is the first place to look. Shorter context and fewer concurrent sequences help more than a smaller vocabulary.",
    resources: [
      r("KV cache", "https://huggingface.co/docs/transformers/kv_cache", "Hugging Face"),
      r("vLLM documentation", "https://docs.vllm.ai/en/latest/", "vLLM"),
    ],
    related: ["attention", "inference"],
  },
  {
    slug: "kl-divergence",
    name: "KL Divergence",
    letter: "K",
    aliases: ["Kullback-Leibler divergence", "relative entropy"],
    category: "Training",
    level: "intermediate",
    summary: "How much information you lose if you use one distribution in place of another.",
    definition:
      "KL divergence is the expected extra surprise of using your model’s probabilities instead of the true ones. Cross-entropy and KL differ by a constant when the target is fixed, which is why minimizing one minimizes the other during classification.",
    inPractice:
      "It is not symmetric. KL from data to model punishes missing a real mode; the other direction punishes inventing modes the data does not have. Know which one your loss uses.",
    resources: [
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["cross-entropy", "jensen-shannon-divergence"],
  },
  {
    slug: "k-nearest-neighbors",
    name: "k-Nearest Neighbors",
    letter: "K",
    aliases: ["k-NN", "KNN"],
    category: "Models",
    level: "foundational",
    summary: "A method that predicts from the closest stored examples, with no training step beyond saving them.",
    definition:
      "k-NN looks up the k training points nearest a query and votes or averages their labels. It is a baseline for tabular data and the conceptual ancestor of embedding search, which is nearest neighbors in a learned space.",
    inPractice:
      "Scale the features first. A column measured in thousands will dominate a column measured in fractions, and the “nearest” neighbor will be meaningless.",
    resources: [
      r("Nearest Neighbors", "https://scikit-learn.org/stable/modules/neighbors.html", "scikit-learn"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["embedding", "semantic-search"],
  },
  {
    slug: "k-means",
    name: "k-Means",
    letter: "K",
    aliases: ["k-means clustering"],
    category: "Models",
    level: "foundational",
    summary: "A clustering method that partitions points around k centroids.",
    definition:
      "k-means alternates between assigning each point to the nearest centroid and moving each centroid to the mean of its points. You choose k. The result depends on the start, so several restarts are normal.",
    inPractice:
      "Run it on embeddings to see the shape of a corpus. Treat the clusters as a hypothesis to label by hand, not as a taxonomy.",
    resources: [
      r("Clustering", "https://scikit-learn.org/stable/modules/clustering.html", "scikit-learn"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["clustering", "embedding"],
  },
  {
    slug: "kernel-trick",
    name: "Kernel Trick",
    letter: "K",
    aliases: ["kernel method", "RBF kernel"],
    category: "Models",
    level: "advanced",
    summary: "Computing a similarity in a high-dimensional feature space without ever building those features.",
    definition:
      "A kernel is a function of two inputs that equals a dot product in some other space. Support vector machines use this to separate data that is not linearly separable in the original coordinates, at a cost that depends on the number of examples.",
    inPractice:
      "Kernels shine on small, carefully measured datasets. Past a few tens of thousands of rows, a linear model or a tree ensemble is usually the practical choice.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["classifier", "feature"],
  },
  {
    slug: "knowledge-graph",
    name: "Knowledge Graph",
    letter: "K",
    aliases: ["KG"],
    category: "Data",
    level: "intermediate",
    summary: "A store of entities and the typed relationships between them.",
    definition:
      "A knowledge graph records facts as edges: a person works at a company, a drug treats a condition. Unlike a paragraph, the structure can be queried exactly. Linking it to a language model is one way to ground answers in facts someone maintains.",
    inPractice:
      "Use the graph for questions with a right edge, and the model for questions that need phrasing. Do not ask the model to recall a relationship you can look up.",
    resources: [
      r("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "https://arxiv.org/abs/2005.11430", "arXiv"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["rag", "ground-truth"],
  },
  {
    slug: "attention-key",
    name: "Key (Attention)",
    letter: "K",
    aliases: ["attention key", "K matrix"],
    category: "Models",
    level: "intermediate",
    summary: "The vector a token offers so other tokens can decide how much to read it.",
    definition:
      "In attention, each token produces a query, a key, and a value. The dot product of a query with a key is the score that decides how much of that token’s value to mix in. Keys are what get cached, along with values, during decoding.",
    inPractice:
      "If you are reading a transformer diagram, follow Q, K, and V before the surrounding blocks. The rest of the layer exists to produce and consume them.",
    resources: [
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
    ],
    related: ["query", "attention"],
  },
  {
    slug: "kalman-filter",
    name: "Kalman Filter",
    letter: "K",
    aliases: ["linear quadratic estimation"],
    category: "Models",
    level: "advanced",
    summary: "An algorithm that estimates a changing state by blending a prediction with a noisy measurement.",
    definition:
      "A Kalman filter keeps a mean and a covariance, predicts them forward with a motion model, and updates them when a sensor reports in. It is optimal for linear systems with Gaussian noise, and it is still the backbone of tracking in robotics.",
    inPractice:
      "Use it when you have a physical state and a sensor model. It is the wrong tool for open-ended text, and the right tool for fusing positions, velocities, and noisy readings.",
    resources: [
      r("Kalman filter", "https://en.wikipedia.org/wiki/Kalman_filter", "Wikipedia"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["bayesian-inference", "uncertainty-estimation"],
  },
  {
    slug: "keyword-extraction",
    name: "Keyword Extraction",
    letter: "K",
    aliases: ["keyphrase extraction"],
    category: "Language",
    level: "foundational",
    summary: "Pulling the few terms that best identify a document.",
    definition:
      "Keyword extraction ranks words or phrases by how characteristic they are of one document relative to a corpus. Statistical scores such as TF-IDF and small taggers both do the job. The output is an index, a tag list, or a query expansion.",
    inPractice:
      "Prefer extracted phrases over single words for titles and products. A lone adjective is rarely a useful keyword.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["n-gram", "information-retrieval"],
  },
  {
    slug: "llm",
    name: "Large Language Model",
    letter: "L",
    aliases: ["LLM"],
    category: "Language",
    level: "foundational",
    summary: "A language model large enough, and trained on enough text, to be useful across many tasks.",
    definition:
      "An LLM is a foundation model for text, usually a transformer trained to predict tokens and then tuned to follow instructions. “Large” is relative, but the behavior people mean — following novel instructions, using tools, writing code — showed up as scale and data grew.",
    inPractice:
      "Start with the smallest model that passes your evaluation. A larger one costs more on every request and is not automatically better at your narrow task.",
    resources: [
      r("Language Models are Few-Shot Learners", "https://arxiv.org/abs/2005.14165", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["language-model", "foundation-model"],
  },
  {
    slug: "language-model",
    name: "Language Model",
    letter: "L",
    aliases: ["LM"],
    category: "Language",
    level: "foundational",
    summary: "A model of how likely a sequence of tokens is, used to score text or to generate it.",
    definition:
      "A language model assigns probabilities to token sequences. Sampling from those conditionals generates text. The same object can classify, retrieve, or chat once you wrap it in a prompt or a fine-tune.",
    inPractice:
      "Ask whether you need generation or a probability. Scoring a candidate sentence is cheaper and easier to test than letting the model write freely.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["token", "perplexity"],
  },
  {
    slug: "lora",
    name: "LoRA",
    letter: "L",
    aliases: ["low-rank adaptation"],
    category: "Training",
    level: "intermediate",
    summary: "A fine-tuning method that trains small low-rank matrices instead of all the weights.",
    definition:
      "LoRA freezes the pretrained weights and adds a pair of thin matrices at selected layers. You store and train only those matrices, so many adaptations of one base model can share the same backbone in memory.",
    inPractice:
      "Match the LoRA rank to how different the new task is. A tiny rank is enough for style; a new domain may need a higher rank or a full fine-tune.",
    resources: [
      r("LoRA: Low-Rank Adaptation of Large Language Models", "https://arxiv.org/abs/2106.09685", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["fine-tuning", "qlora"],
  },
  {
    slug: "loss-function",
    name: "Loss Function",
    letter: "L",
    aliases: ["objective", "cost function"],
    category: "Training",
    level: "foundational",
    summary: "The number training tries to push down, a stand-in for the behavior you actually want.",
    definition:
      "The loss compares a prediction with a target: cross-entropy for tokens, squared error for real values, a preference loss for rankings. If the loss and the product metric disagree, the optimizer will faithfully improve the wrong thing.",
    inPractice:
      "Log both the training loss and the product metric. A falling loss with a flat metric means you are optimizing a proxy.",
    resources: [
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["cross-entropy", "objective-function"],
  },
  {
    slug: "learning-rate",
    name: "Learning Rate",
    letter: "L",
    aliases: ["step size", "LR"],
    category: "Training",
    level: "foundational",
    summary: "How far the optimizer steps along the gradient on each update.",
    definition:
      "A high learning rate moves fast and can diverge. A low one moves slowly and can get stuck. Schedules change it over time: a short warmup, then a decay, is the pattern most large training runs use.",
    inPractice:
      "If loss explodes in the first steps, cut the learning rate by ten before you touch anything else.",
    resources: [
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["warmup", "adam-optimizer"],
  },
  {
    slug: "logit",
    name: "Logit",
    letter: "L",
    aliases: ["logits"],
    category: "Models",
    level: "intermediate",
    summary: "The raw score for a class or a token, before softmax turns it into a probability.",
    definition:
      "Logits are unbounded real numbers coming out of the last linear layer. Subtracting a constant from all of them does not change the softmax, which is why implementations shift by the max for numerical stability. Temperature divides logits before that softmax.",
    inPractice:
      "Debug generations from the logits or the log-probabilities, not from the sampled text alone. A token can be sampled from a distribution that barely preferred it.",
    resources: [
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["softmax", "temperature"],
  },
  {
    slug: "lstm",
    name: "LSTM",
    letter: "L",
    aliases: ["long short-term memory"],
    category: "Models",
    level: "intermediate",
    summary: "A recurrent cell with gates that decide what to remember, forget, and expose.",
    definition:
      "LSTMs were designed so a signal could cross many time steps without vanishing. They powered translation and speech before transformers. The gates are small neural nets that write and erase a memory vector.",
    inPractice:
      "For new sequence work, start with a transformer. Keep LSTMs in mind for small streaming problems where a long attention window does not fit.",
    resources: [
      r("Long Short-Term Memory", "https://d2l.ai/chapter_recurrent-modern/lstm.html", "Dive into Deep Learning"),
      r("Deep Learning — sequence modeling", "https://www.deeplearningbook.org/contents/rnn.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["recurrent-neural-network", "vanishing-gradient"],
  },
  {
    slug: "latent-space",
    name: "Latent Space",
    letter: "L",
    aliases: ["latent representation"],
    category: "Models",
    level: "intermediate",
    summary: "The compressed internal coordinates a model uses instead of the raw input.",
    definition:
      "A latent space is a lower-dimensional representation learned so that movement in it corresponds to meaningful change: a face’s pose, a sentence’s topic. Autoencoders, VAEs, and diffusion models that run in latent space all depend on this compression being faithful.",
    inPractice:
      "Interpolate in latent space only after you have checked that the decoder still produces valid outputs along the path. Straight lines in the latent space are not always meaningful.",
    resources: [
      r("Auto-Encoding Variational Bayes", "https://arxiv.org/abs/1312.6114", "arXiv"),
      r("The Illustrated Stable Diffusion", "https://jalammar.github.io/illustrated-stable-diffusion/", "Jay Alammar"),
    ],
    related: ["variational-autoencoder", "embedding"],
  },
  {
    slug: "label",
    name: "Label",
    letter: "L",
    aliases: ["target", "annotation"],
    category: "Data",
    level: "foundational",
    summary: "The answer attached to an example so supervised learning has something to match.",
    definition:
      "A label can be a class, a span of text, a bounding box, or a preferred completion. Its quality is the quality of the supervision. Models reproduce the labeling rule, including the mistakes that were systematic.",
    inPractice:
      "Write a one-page labeling guide and measure whether two people follow it the same way. That agreement is the ceiling on your metric.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["ground-truth", "supervised-learning"],
  },
  {
    slug: "long-context",
    name: "Long Context",
    letter: "L",
    aliases: ["long context window", "extended context"],
    category: "Language",
    level: "intermediate",
    summary: "The ability of a model to use tens or hundreds of thousands of tokens in one request.",
    definition:
      "Long context extends the window with positional tricks, training on longer sequences, or both. A larger window does not mean the model uses every token equally. Retrieval can still beat stuffing the entire corpus into the prompt.",
    inPractice:
      "Test with the fact in the middle of the prompt, not only at the start. That is where long-context models most often fail.",
    resources: [
      r("YaRN: Efficient Context Window Extension", "https://arxiv.org/abs/2309.00071", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["context-window", "yarn"],
  },
];
