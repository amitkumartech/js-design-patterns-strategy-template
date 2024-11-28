# js-design-patterns-strategy-template
Created with CodeSandbox

## Design Patterns: Strategy and Template Pattern

This document explores two important behavioral design patterns in software development: Strategy Pattern and Template Pattern.

**What are Design Patterns?**

Design patterns are proven solutions to common software design problems. They help make code more modular, reusable, and maintainable.

**In this document, we will focus on:**

* **Strategy Pattern:** Allows for dynamic selection of algorithms or behaviors at runtime.
* **Template Pattern:** Defines the structure of an algorithm while allowing subclasses to alter specific steps.

**Understanding these patterns will help you write cleaner and more maintainable code, especially when building algorithms, workflows, or process-driven applications.**

## Strategy Pattern

The Strategy Pattern enables selecting an algorithm's behavior at runtime. This promotes flexibility and extensibility in your codebase.

**Components:**

* **Context:** Maintains a reference to a strategy object and delegates execution to the strategy.
* **Strategy Interface (Optional):** Defines a common interface for all supported strategies.
* **Concrete Strategies:** Implement the algorithm using the common interface (or following a convention if no interface is defined).

**JavaScript Example:**

This example demonstrates implementing the Strategy Pattern for payment methods (Credit Card, PayPal, Bitcoin).

**Code (Full Example):**

*Please refer to the full document for the complete code implementation.*

**Key Features:**

* **Encapsulation of Behavior:** Each payment method is encapsulated in its own class, making it easy to add new strategies.
* **Flexibility:** The strategy can be switched dynamically at runtime using the `setStrategy()` method.
* **Open/Closed Principle:** New strategies can be added without modifying existing code.

**Use Cases:**

* Payment gateways (as shown in the example).
* Different sorting algorithms.
* Validating input data using different rules.
* Compression algorithms.

## Template Pattern

The Template Pattern defines the skeleton of an algorithm in a base class but lets subclasses override specific steps without changing its structure. 

**Key Features:**

* **Algorithm Structure:** The overall structure or sequence of steps is defined in the base class.
* **Subclasses can override specific steps without modifying the overall structure.**
* **Code Reuse:** Common behavior is implemented in the base class, while specific behavior is delegated to the subclasses.
* **Control Inversion:** The base class controls the execution flow, while subclasses provide specific implementations.

**JavaScript Example:**

This example showcases the Template Pattern for creating beverages (Coffee and Tea).

**Code (Full Example):**

*Please refer to the full document for the complete code implementation.*

## Strategy Pattern vs. Template Pattern

**Similarities:**

* **Behavioral Patterns:** Both focus on managing algorithms or behaviors.
* **Code Reuse:** Both promote code reuse by encapsulating behavior and allowing extensions.
* **Polymorphism:** Both utilize polymorphism to achieve their goals (e.g., subclasses override methods).
* **Avoiding Duplicated Code:** Both eliminate duplicated code by moving common functionality to a base structure.

**Differences:**

| Feature            | Strategy Pattern                                         | Template Pattern                                        |
|--------------------|-----------------------------------------------------------|----------------------------------------------------------|
| **Focus**           | Chooses between interchangeable algorithms at runtime.       | Defines a fixed structure with customizable steps.        |
| **Flexibility**     | High - new algorithms can be added dynamically.             | Medium - changes involve overriding specific steps.       |
| **Control Flow**     | Subclasses can potentially define the execution flow.   | Base class dictates the overall execution flow.           |

**When to Use Which Pattern:**

* **Use Strategy Pattern:**
    * When you need to choose between multiple interchangeable behaviors or algorithms at runtime.
    * When you need to add new behaviors without modifying existing code.
* **Use Template Pattern:**
    * When you have a fixed algorithm structure but need certain steps to be implemented differently by subclasses.
    * When the overall workflow is fixed, and specific variations are the only expected changes.


**Note:** This is a condensed version of the original document. For a more comprehensive understanding, including code examples and detailed explanations, please refer to the full document.
