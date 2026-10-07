import type { Term } from "./types";

const r = (title: string, url: string, source: string) => ({ title, url, source });

export const termsMP: Term[] = [
  {
    slug: "machine-learning",
    name: "Machine Learning",
    letter: "M",
    aliases: ["ML"],
    category: "Foundations",
    level: "foundational",
    summary: "Building systems that improve at a task from examples instead of from hand-written rules alone.",
    definition:
      "Machine learning searches for a function that fits data under a chosen loss and a chosen model family. Deep learning is the branch that uses deep neural networks. Plenty of production systems are still linear models and boosted trees.",
    inPractice:
      "Write the decision, the examples, and the cost of each kind of error before you pick an algorithm. Those three constrain the model more than the library does.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["deep-learning", "supervised-learning"],
  },
  {
    slug: "model",
    name: "Model",
    letter: "M",
    aliases: ["checkpoint"],
    category: "Foundations",
    level: "foundational",
    summary: "The learned function: architecture plus the weights produced by training.",
    definition:
      "People say “model” for the architecture, the trained weights, and the whole served system. Those are different objects. A checkpoint is a specific set of weights you can reload; the product around it includes prompts, tools, and filters.",
    inPractice:
      "Version the checkpoint, the tokenizer, and the prompt together. Changing any one of them changes the system you evaluated.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["parameter", "training"],
  },
  {
    slug: "mixture-of-experts",
    name: "Mixture of Experts",
    letter: "M",
    aliases: ["MoE"],
    category: "Models",
    level: "advanced",
    summary: "A model that routes each token to a few specialist sub-networks instead of using every parameter.",
    definition:
      "A mixture of experts keeps many feed-forward blocks and a router that picks a small number of them per token. The model can be huge in total parameters and still cheap per token, at the cost of load-balancing and more complex serving.",
    inPractice:
      "Watch whether experts actually specialize or one of them takes all the traffic. An idle expert is memory you are paying for.",
    resources: [
      r("Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer", "https://arxiv.org/abs/1701.06538", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["router", "transformer"],
  },
  {
    slug: "multimodal-model",
    name: "Multimodal Model",
    letter: "M",
    aliases: ["multimodal"],
    category: "Multimodal",
    level: "intermediate",
    summary: "A model that takes more than one kind of input, such as text and images together.",
    definition:
      "Multimodal models map different sensors into a shared computation: a photo plus a question, or speech plus a slide. Training has to teach the model how the modalities line up, not only how each one works alone.",
    inPractice:
      "Test each modality separately and then together. A model can caption images well and still ignore the image once a long text prompt is present.",
    resources: [
      r("Learning Transferable Visual Models From Natural Language Supervision", "https://arxiv.org/abs/2103.00020", "arXiv"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["vision-language-model", "clip"],
  },
  {
    slug: "memory",
    name: "Memory",
    letter: "M",
    aliases: ["agent memory", "conversation memory"],
    category: "Agents",
    level: "intermediate",
    summary: "State kept outside a single prompt so an agent can use what happened earlier.",
    definition:
      "The context window is short-term memory and it forgets when it fills. Longer memory is a store — notes, a vector index, a profile — that the agent writes and later retrieves. It is an application feature, not a new weight.",
    inPractice:
      "Decide what is allowed to be remembered and for how long. A memory that saves every tool result will eventually retrieve its own mistakes.",
    resources: [
      r("LLM Powered Autonomous Agents", "https://lilianweng.github.io/posts/2023-06-23-agent/", "Lilian Weng"),
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
    ],
    related: ["agent", "rag"],
  },
  {
    slug: "model-context-protocol",
    name: "Model Context Protocol",
    letter: "M",
    aliases: ["MCP"],
    category: "Agents",
    level: "intermediate",
    summary: "An open protocol for connecting a model host to tools, data sources, and prompts.",
    definition:
      "MCP standardizes how an assistant discovers tools and resources from a server: list what is available, call a tool, read a resource. It is the plumbing between a chat client and the systems you already have, not a model itself.",
    inPractice:
      "Treat an MCP server like any other API in your trust boundary. A tool the model can call is a tool an untrusted prompt can try to call.",
    resources: [
      r("Model Context Protocol", "https://modelcontextprotocol.io/docs/getting-started/intro", "MCP"),
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
    ],
    related: ["tool-use", "function-calling"],
  },
  {
    slug: "masked-language-model",
    name: "Masked Language Model",
    letter: "M",
    aliases: ["MLM"],
    category: "Language",
    level: "intermediate",
    summary: "A model trained to fill in tokens that were hidden in the input.",
    definition:
      "Masked language modeling hides a fraction of tokens and asks the model to recover them using both sides of the context. BERT is the famous example. The objective builds strong encoders and does not, by itself, teach left-to-right generation.",
    inPractice:
      "Use an MLM checkpoint for embeddings and classifiers. If you need the model to write, start from an autoregressive checkpoint instead.",
    resources: [
      r("BERT", "https://arxiv.org/abs/1810.04805", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["bert", "encoder"],
  },
  {
    slug: "multilayer-perceptron",
    name: "Multilayer Perceptron",
    letter: "M",
    aliases: ["MLP", "feedforward network"],
    category: "Models",
    level: "foundational",
    summary: "A stack of fully connected layers, the simplest deep network.",
    definition:
      "An MLP connects every unit to every unit in the next layer, with an activation in between. Transformers still contain an MLP inside each block, applied to each token after attention has mixed information across the sequence.",
    inPractice:
      "For tabular data, try an MLP only after a well-tuned gradient-boosted tree. For tokens and pixels, the MLP is a component, not the whole architecture.",
    resources: [
      r("Multilayer perceptrons", "https://d2l.ai/chapter_multilayer-perceptrons/index.html", "Dive into Deep Learning"),
      r("Deep Learning — multilayer networks", "https://www.deeplearningbook.org/contents/mlp.html", "Goodfellow, Bengio, Courville"),
    ],
    related: ["activation-function", "neural-network"],
  },
  {
    slug: "monte-carlo",
    name: "Monte Carlo",
    letter: "M",
    aliases: ["MC sampling", "Monte Carlo method"],
    category: "Foundations",
    level: "intermediate",
    summary: "Estimating a quantity by averaging many random samples.",
    definition:
      "Monte Carlo methods replace an integral you cannot compute with an average over draws. Policy gradients, dropout at inference, and “best of n” decoding are all versions of this idea: spend samples to estimate an expectation.",
    inPractice:
      "Report the spread across samples, not only the mean. A high-variance estimate will send you chasing noise.",
    resources: [
      r("Deep Learning — probability", "https://www.deeplearningbook.org/contents/prob.html", "Goodfellow, Bengio, Courville"),
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
    ],
    related: ["sampling", "variance"],
  },
  {
    slug: "markov-decision-process",
    name: "Markov Decision Process",
    letter: "M",
    aliases: ["MDP"],
    category: "Training",
    level: "advanced",
    summary: "The standard setup for sequential decisions: states, actions, and rewards, with the future depending on the present state.",
    definition:
      "In an MDP the next state and reward depend on the current state and the action you take, not on the full history. Reinforcement learning is the problem of finding a good policy for an MDP when you do not already know how the world responds.",
    inPractice:
      "If the agent cannot see the state it needs, the Markov assumption is false and the policy will thrash. Add the missing observation before you tune the algorithm.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["reinforcement-learning", "policy"],
  },
  {
    slug: "neural-network",
    name: "Neural Network",
    letter: "N",
    aliases: ["neural net"],
    category: "Models",
    level: "foundational",
    summary: "A parameterized function made of layers of units, trained by gradient descent.",
    definition:
      "A neural network composes linear maps and nonlinearities. The word covers everything from a two-layer perceptron to a transformer. What makes it useful is that the same training loop fits all of those shapes.",
    inPractice:
      "Name the architecture when you talk about one. “We use a neural network” does not tell anyone whether you can serve it.",
    resources: [
      r("Neural Networks Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "Andrej Karpathy"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["artificial-neural-network", "deep-learning"],
  },
  {
    slug: "natural-language-processing",
    name: "Natural Language Processing",
    letter: "N",
    aliases: ["NLP"],
    category: "Language",
    level: "foundational",
    summary: "The field that teaches computers to work with human language.",
    definition:
      "NLP covers classification, search, translation, extraction, and generation. Large language models absorbed many of the separate pipelines, but the tasks — and the need to evaluate them — did not go away.",
    inPractice:
      "Start from the task, not the model. Extraction with a score you can check is a different product from open-ended generation.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["language-model", "token"],
  },
  {
    slug: "normalization",
    name: "Normalization",
    letter: "N",
    aliases: ["layer norm", "LayerNorm"],
    category: "Training",
    level: "intermediate",
    summary: "Rescaling activations or features so training sees a stable range.",
    definition:
      "Normalization subtracts a mean and divides by a spread, then often re-scales with learned parameters. Batch norm uses the batch; layer norm uses the features of a single example, which is what transformers use.",
    inPractice:
      "Also normalize input features for linear models and trees that care about scale. Skipping that step makes the learning rate mean different things per column.",
    resources: [
      r("Batch Normalization", "https://arxiv.org/abs/1502.03167", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["batch-normalization", "z-score-normalization"],
  },
  {
    slug: "nucleus-sampling",
    name: "Nucleus Sampling",
    letter: "N",
    aliases: ["top-p sampling"],
    category: "Language",
    level: "intermediate",
    summary: "Sampling the next token from the smallest set of candidates whose probabilities add up to p.",
    definition:
      "Nucleus sampling, also called top-p, cuts the tail of unlikely tokens and samples from what remains. It avoids the dullness of always picking the top token and the nonsense of sampling the whole vocabulary.",
    inPractice:
      "Lower p when you need stable, factual phrasing. Raise it when you want variation and can check the result.",
    resources: [
      r("The Illustrated GPT-2", "https://jalammar.github.io/illustrated-gpt2/", "Jay Alammar"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["top-p-sampling", "temperature"],
  },
  {
    slug: "n-gram",
    name: "N-gram",
    letter: "N",
    aliases: ["bigram", "trigram"],
    category: "Language",
    level: "foundational",
    summary: "A contiguous sequence of n tokens, the unit older language models and BLEU both count.",
    definition:
      "A unigram is one token, a bigram two, and so on. Counting n-grams was how statistical language models estimated the next word. Modern metrics still use n-gram overlap because it is simple and reproducible.",
    inPractice:
      "A high n-gram overlap does not prove a good answer. Use n-grams to catch copying and gross mismatch, then read the cases they cannot see.",
    resources: [
      r("BLEU", "https://aclanthology.org/P02-1040/", "ACL Anthology"),
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
    ],
    related: ["bleu", "token"],
  },
  {
    slug: "named-entity-recognition",
    name: "Named Entity Recognition",
    letter: "N",
    aliases: ["NER"],
    category: "Language",
    level: "intermediate",
    summary: "Finding spans in text that are names of people, places, organizations, or other types you define.",
    definition:
      "NER labels each token as part of an entity or not, and says which type. It is a building block for search, knowledge graphs, and redaction. A general chat model can imitate it, but a dedicated tagger is easier to score.",
    inPractice:
      "Define the entity types in writing, with borderline examples. “Organization” means different things to a lawyer and a news editor.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["token", "classifier"],
  },
  {
    slug: "negative-sampling",
    name: "Negative Sampling",
    letter: "N",
    aliases: ["negative examples"],
    category: "Training",
    level: "intermediate",
    summary: "Training a model on a few wrong answers instead of every possible wrong answer.",
    definition:
      "The full contrast is often impossible: every other word, every other document. Negative sampling draws a handful of negatives and teaches the model to prefer the true one. Word2vec made the trick famous, and retrieval training still uses it.",
    inPractice:
      "Replace random negatives with hard negatives once the model is past the easy cases. Random ones stop teaching.",
    resources: [
      r("Efficient Estimation of Word Representations in Vector Space", "https://arxiv.org/abs/1301.3781", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["word2vec", "hard-negative"],
  },
  {
    slug: "nerf",
    name: "NeRF",
    letter: "N",
    aliases: ["neural radiance field"],
    category: "Multimodal",
    level: "advanced",
    summary: "A neural representation of a 3D scene that renders new viewpoints by querying color and density along rays.",
    definition:
      "A NeRF fits a network to photos of one scene. To render a pixel it samples points along the camera ray and composites their color and density. The result is a continuous scene, not a mesh someone modeled by hand.",
    inPractice:
      "NeRFs are per-scene fits, so they are the wrong default for generating arbitrary objects from a text prompt. Use them when you have many views of one place.",
    resources: [
      r("NeRF: Representing Scenes as Neural Radiance Fields", "https://arxiv.org/abs/2003.08934", "arXiv"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["representation", "multimodal-model"],
  },
  {
    slug: "noise-schedule",
    name: "Noise Schedule",
    letter: "N",
    aliases: ["diffusion schedule", "beta schedule"],
    category: "Models",
    level: "advanced",
    summary: "The plan for how much noise a diffusion model adds or removes at each step.",
    definition:
      "The noise schedule says how corrupted the data is at step t. It controls both training and the number of denoising steps at sample time. A schedule that destroys the signal too early, or too late, makes the model harder to learn.",
    inPractice:
      "Treat the schedule as a hyperparameter of the sampler you ship, not only of training. Fewer steps is a product decision with a visible quality cost.",
    resources: [
      r("Denoising Diffusion Probabilistic Models", "https://arxiv.org/abs/2006.11239", "arXiv"),
      r("The Illustrated Stable Diffusion", "https://jalammar.github.io/illustrated-stable-diffusion/", "Jay Alammar"),
    ],
    related: ["diffusion-model", "sampling"],
  },
  {
    slug: "natural-language-generation",
    name: "Natural Language Generation",
    letter: "N",
    aliases: ["NLG"],
    category: "Language",
    level: "foundational",
    summary: "Producing text for a person to read, as opposed to only labeling text that already exists.",
    definition:
      "NLG is the output side of language systems: summaries, replies, descriptions, code comments. The hard part is not emitting words but constraining them so they stay faithful to a source and a purpose.",
    inPractice:
      "Give the generator a source and an automatic check. Free generation with no source is where unsupported claims come from.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["language-model", "hallucination"],
  },
  {
    slug: "overfitting",
    name: "Overfitting",
    letter: "O",
    aliases: ["overfit"],
    category: "Training",
    level: "foundational",
    summary: "When a model fits the training set so tightly that it gets worse on new examples.",
    definition:
      "Overfitting shows up as a widening gap between training and validation error. The model has started to memorize accidents in the sample: a particular phrasing, a leaked identifier, a noisy label.",
    inPractice:
      "If training loss falls and validation loss rises, stop, add data, or regularize. Do not keep training because the training curve still looks good.",
    resources: [
      r("Deep Learning — regularization", "https://www.deeplearningbook.org/contents/regularization.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["generalization", "regularization"],
  },
  {
    slug: "optimizer",
    name: "Optimizer",
    letter: "O",
    aliases: ["optimisation algorithm"],
    category: "Training",
    level: "foundational",
    summary: "The algorithm that turns gradients into weight updates.",
    definition:
      "SGD, Adam, and their relatives are optimizers. They decide the step from the gradient, the learning rate, and sometimes a memory of past gradients. The loss says what to improve; the optimizer says how to move.",
    inPractice:
      "Use AdamW for transformers unless you have a reason not to. Spend your tuning budget on learning rate and batch size first.",
    resources: [
      r("Optimization", "https://d2l.ai/chapter_optimization/index.html", "Dive into Deep Learning"),
      r("Adam: A Method for Stochastic Optimization", "https://arxiv.org/abs/1412.6980", "arXiv"),
    ],
    related: ["adam-optimizer", "stochastic-gradient-descent"],
  },
  {
    slug: "objective-function",
    name: "Objective Function",
    letter: "O",
    aliases: ["training objective"],
    category: "Training",
    level: "foundational",
    summary: "The quantity you explicitly optimize, which may only approximate the outcome you want.",
    definition:
      "The objective is the mathematical target: next-token cross-entropy, a preference loss, a detection loss. Product goals like “users trust the answer” have to be translated into something like it, and that translation is where systems go wrong.",
    inPractice:
      "Write the objective next to the metric you will ship against. If they diverge, change the objective or stop trusting the loss curve.",
    resources: [
      r("Deep Learning — optimization", "https://www.deeplearningbook.org/contents/optimization.html", "Goodfellow, Bengio, Courville"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["loss-function", "evaluation"],
  },
  {
    slug: "out-of-distribution",
    name: "Out of Distribution",
    letter: "O",
    aliases: ["OOD"],
    category: "Evaluation",
    level: "intermediate",
    summary: "Inputs that do not come from the same distribution as the training data.",
    definition:
      "Out-of-distribution inputs are the cases the training set did not prepare the model for: a new language, a new camera, a new kind of question. Models often answer them with the same confidence they reserve for familiar ones.",
    inPractice:
      "Build a small OOD set from real traffic the training data missed. A model that is only tested in-distribution has not been tested.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["data-drift", "generalization"],
  },
  {
    slug: "one-hot-encoding",
    name: "One-Hot Encoding",
    letter: "O",
    aliases: ["one-hot"],
    category: "Data",
    level: "foundational",
    summary: "Representing a category as a vector that is zero everywhere except a single 1.",
    definition:
      "One-hot encoding gives each class its own dimension so a linear model can weight them independently. It ignores similarity between categories. Learned embeddings replaced it for large vocabularies because a one-hot vocabulary vector is enormous and sparse.",
    inPractice:
      "One-hot is fine for a handful of categories. For tokens, use the model’s embedding table instead of a vector the size of the vocabulary.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["embedding", "feature"],
  },
  {
    slug: "online-learning",
    name: "Online Learning",
    letter: "O",
    aliases: ["incremental learning"],
    category: "Training",
    level: "intermediate",
    summary: "Updating a model as examples arrive, instead of waiting for a full dataset.",
    definition:
      "Online learning takes a step on each new example or small batch and then moves on. It fits drifting data and huge streams. It also makes the model sensitive to the order of arrival and harder to reproduce.",
    inPractice:
      "Snapshot the weights on a schedule. An online model with no checkpoints cannot be rolled back when the stream goes bad.",
    resources: [
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
    ],
    related: ["data-drift", "training"],
  },
  {
    slug: "object-detection",
    name: "Object Detection",
    letter: "O",
    aliases: ["detection"],
    category: "Multimodal",
    level: "intermediate",
    summary: "Finding objects in an image and marking each one with a box and a class.",
    definition:
      "Detection returns a set of boxes, not a single label. Models such as YOLO do this in one pass. The usual score is average precision at a chosen overlap with the true boxes.",
    inPractice:
      "Decide the minimum box quality the product needs before you compare detectors. A box that technically overlaps the object can still be useless to a user.",
    resources: [
      r("You Only Look Once", "https://arxiv.org/abs/1506.02640", "arXiv"),
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
    ],
    related: ["yolo", "jaccard-similarity"],
  },
  {
    slug: "orchestration",
    name: "Orchestration",
    letter: "O",
    aliases: ["agent orchestration", "workflow"],
    category: "Agents",
    level: "intermediate",
    summary: "The code that decides which model or tool runs next and what it is allowed to see.",
    definition:
      "Orchestration is the workflow around models: route this request, call this tool, retry, ask a person, stop. It can be a fixed graph or a loop where the model chooses the next step. Either way it is where timeouts, permissions, and logs live.",
    inPractice:
      "Prefer a fixed workflow when the steps are known. Give the model an open loop only for the parts you cannot write down, and bound how many steps it may take.",
    resources: [
      r("Building effective agents", "https://www.anthropic.com/engineering/building-effective-agents", "Anthropic"),
      r("LLM Powered Autonomous Agents", "https://lilianweng.github.io/posts/2023-06-23-agent/", "Lilian Weng"),
    ],
    related: ["agent", "tool-use"],
  },
  {
    slug: "ocr",
    name: "OCR",
    letter: "O",
    aliases: ["optical character recognition"],
    category: "Multimodal",
    level: "foundational",
    summary: "Turning pixels of text into characters.",
    definition:
      "OCR detects lines and recognizes characters so a scanned page or a photo of a sign becomes a string. Modern systems are neural nets, and they still fail on handwriting, glare, and layouts they were not trained on.",
    inPractice:
      "Keep the image alongside the extracted text. Downstream models will invent the words OCR dropped if you throw the image away.",
    resources: [
      r("CS231n", "https://cs231n.github.io/", "Stanford"),
      r("Practical Deep Learning", "https://course.fast.ai/", "fast.ai"),
    ],
    related: ["object-detection", "multimodal-model"],
  },
  {
    slug: "open-weight-model",
    name: "Open-Weight Model",
    letter: "O",
    aliases: ["open weights"],
    category: "Models",
    level: "foundational",
    summary: "A model whose trained weights you can download and run, under whatever license comes with them.",
    definition:
      "Open weights let you inspect, fine-tune, and serve a model on your own hardware. The license may still restrict use, and the training data is often not included. “Open” here refers to the checkpoint, not automatically to the whole training recipe.",
    inPractice:
      "Read the license and the acceptable-use terms before you ship. A downloadable file is not the same as a model you are allowed to sell.",
    resources: [
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
    ],
    related: ["foundation-model", "fine-tuning"],
  },
  {
    slug: "prompt",
    name: "Prompt",
    letter: "P",
    aliases: ["input prompt"],
    category: "Language",
    level: "foundational",
    summary: "The text and other inputs you give a model for a single request.",
    definition:
      "A prompt is the conditioning context: instructions, examples, retrieved passages, and the user message. It is part of the program. Small edits change the distribution of answers even when the weights stay fixed.",
    inPractice:
      "Store prompts in version control next to the code that calls them. An untracked prompt edit is an untracked release.",
    resources: [
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
      r("Prompt engineering guide", "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/", "Lilian Weng"),
    ],
    related: ["system-prompt", "prompt-engineering"],
  },
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering",
    letter: "P",
    aliases: ["prompt design"],
    category: "Language",
    level: "foundational",
    summary: "The craft of writing and testing prompts so a model does a task reliably.",
    definition:
      "Prompt engineering covers instructions, examples, output format, and the order of context. It is real engineering when you evaluate changes on a fixed set. It is folklore when you stop at one example that looked good.",
    inPractice:
      "Change one instruction at a time and score the whole set. A prompt that fixes one failure often creates another.",
    resources: [
      r("Prompt engineering", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", "Anthropic"),
      r("Prompt engineering", "https://platform.openai.com/docs/guides/prompt-engineering", "OpenAI"),
    ],
    related: ["prompt", "evaluation"],
  },
  {
    slug: "pretraining",
    name: "Pretraining",
    letter: "P",
    aliases: ["pre-training"],
    category: "Training",
    level: "foundational",
    summary: "The long first training run on broad data, before any task-specific adaptation.",
    definition:
      "Pretraining teaches general representations — for language, usually next-token prediction on a huge corpus. Fine-tuning and prompting adapt that model afterward. Almost all of the compute lives in pretraining.",
    inPractice:
      "You will rarely pretrain from scratch. Know what the base run optimized so you can predict what the model is good at and what it never saw.",
    resources: [
      r("Language Models are Few-Shot Learners", "https://arxiv.org/abs/2005.14165", "arXiv"),
      r("Scaling Laws for Neural Language Models", "https://arxiv.org/abs/2001.08361", "arXiv"),
    ],
    related: ["fine-tuning", "foundation-model"],
  },
  {
    slug: "parameter",
    name: "Parameter",
    letter: "P",
    aliases: ["weight", "params"],
    category: "Models",
    level: "foundational",
    summary: "A number inside the model that training adjusts.",
    definition:
      "Parameters are the weights and biases learned from data. A “7B model” has about seven billion of them. Parameter count hints at capacity and memory, and it is not a quality score.",
    inPractice:
      "Budget memory from the parameter count, the optimizer state, and the activation and KV cache. The weights alone are the small part of a training job.",
    resources: [
      r("Scaling Laws for Neural Language Models", "https://arxiv.org/abs/2001.08361", "arXiv"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["weight", "flop"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    letter: "P",
    aliases: ["PPL"],
    category: "Evaluation",
    level: "intermediate",
    summary: "How unsure a language model is, on average, when predicting the next token.",
    definition:
      "Perplexity is the exponential of the average cross-entropy. A perplexity of 20 means the model is as uncertain as if it were choosing uniformly among 20 tokens. Lower is better on the distribution you measure, and it is not a user-satisfaction score.",
    inPractice:
      "Compare perplexity only on the same tokenizer and the same text. A lower number from a different vocabulary is not a better model.",
    resources: [
      r("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "Stanford"),
      r("Language modeling course", "https://huggingface.co/learn/llm-course/chapter1/1", "Hugging Face"),
    ],
    related: ["cross-entropy", "language-model"],
  },
  {
    slug: "precision",
    name: "Precision",
    letter: "P",
    aliases: ["positive predictive value"],
    category: "Evaluation",
    level: "foundational",
    summary: "Of the cases the model flagged, how many were actually correct.",
    definition:
      "Precision is true positives divided by everything the model called positive. High precision means few false alarms. It says nothing about how many real cases you missed; that is recall.",
    inPractice:
      "If a false alarm is expensive — a bad payment hold, a wrong medical flag — raise the threshold and watch precision. Then check what recall you gave up.",
    resources: [
      r("Machine Learning Glossary", "https://developers.google.com/machine-learning/glossary", "Google"),
      r("scikit-learn user guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn"),
    ],
    related: ["recall", "f1-score"],
  },
  {
    slug: "policy",
    name: "Policy",
    letter: "P",
    aliases: ["decision policy"],
    category: "Training",
    level: "intermediate",
    summary: "A rule, often a model, that chooses an action given a state.",
    definition:
      "In reinforcement learning the policy is what you deploy: a mapping from observation to action. It can be deterministic or a distribution over actions. The reward and the value function exist to improve it.",
    inPractice:
      "Log the observation the policy actually saw. When an agent misbehaves, the bug is often a missing field in that observation, not the optimizer.",
    resources: [
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
      r("Proximal Policy Optimization", "https://arxiv.org/abs/1707.06347", "arXiv"),
    ],
    related: ["ppo", "reinforcement-learning"],
  },
  {
    slug: "ppo",
    name: "PPO",
    letter: "P",
    aliases: ["proximal policy optimization"],
    category: "Training",
    level: "advanced",
    summary: "A reinforcement-learning algorithm that updates a policy in small, clipped steps so it does not collapse.",
    definition:
      "PPO limits how far the new policy may move from the old one on each batch, using a clipped objective. It became the default policy-gradient method and the usual RL stage inside RLHF.",
    inPractice:
      "If you are aligning a language model and you do not need the full RL machinery, look at DPO first. PPO is powerful and easy to destabilize.",
    resources: [
      r("Proximal Policy Optimization Algorithms", "https://arxiv.org/abs/1707.06347", "arXiv"),
      r("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "OpenAI"),
    ],
    related: ["reinforcement-learning", "rlhf"],
  },
  {
    slug: "positional-encoding",
    name: "Positional Encoding",
    letter: "P",
    aliases: ["position embedding", "RoPE"],
    category: "Models",
    level: "intermediate",
    summary: "Information added so a transformer knows the order of tokens, which attention alone does not.",
    definition:
      "Self-attention is permutation-invariant until you mark positions. Sinusoidal encodings, learned position vectors, and rotary encodings (RoPE) are ways to do that. Extending context length is largely a problem of how positions are represented.",
    inPractice:
      "If you stretch a model to a longer window, read how its positions were trained. A naive extension attends, but the positions no longer mean what the weights expect.",
    resources: [
      r("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "arXiv"),
      r("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
    ],
    related: ["transformer", "yarn"],
  },
  {
    slug: "pruning",
    name: "Pruning",
    letter: "P",
    aliases: ["weight pruning", "sparsity"],
    category: "Systems",
    level: "advanced",
    summary: "Removing weights or units that contribute little, to make a model smaller.",
    definition:
      "Pruning sets some parameters to zero, or deletes whole channels, then usually fine-tunes so the remaining network recovers. Unstructured sparsity saves storage more easily than it saves speed, unless the hardware can skip the zeros.",
    inPractice:
      "Measure latency on the hardware you will serve on. A 50% sparse model that your kernels do not accelerate is not faster.",
    resources: [
      r("PyTorch tutorials", "https://pytorch.org/tutorials/", "PyTorch"),
      r("Deep Learning", "https://www.deeplearningbook.org/", "Goodfellow, Bengio, Courville"),
    ],
    related: ["quantization", "inference"],
  },
];
