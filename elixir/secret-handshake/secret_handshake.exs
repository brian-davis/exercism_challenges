defmodule SecretHandshake do
  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    actions  = ["wink", "double blink", "close your eyes", "jump"]
    mapped = code |>
             Integer.digits(2) |>
             Enum.reverse() |>
             Enum.zip(actions) |>
             Enum.reject(fn({c, _d}) -> c == 0 end) |>
             Enum.map(fn({_c, d}) -> d end)

    cond do
      length(Integer.digits(code, 2)) == 5 ->
        Enum.reverse(mapped)
      true ->
        mapped
    end
  end
end
